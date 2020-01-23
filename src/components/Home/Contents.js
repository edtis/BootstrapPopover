import React, { Component } from "react";
import Popover from "react-text-selection-popover";
import get from "lodash/get";

import { Row, Col } from "react-bootstrap";
import Search from "./Search";

class Contents extends Component {
  state = {
    startCoords: 0,
    endCoords: 0,
    status: false,
    selectedText: ""
  };

  constructor(props) {
    super(props);
    this.refParagraph = React.createRef();
  }

  handleMouseDown = event => {
    let x = event.clientX;
    let y = event.clientY;
    let startCoords = "Start position X: " + x + ", Start position Y: " + y;
    this.setState({
      startCoords: startCoords,
      status: false
    });
  };

  handleMouseUp = event => {
    let x = event.clientX;
    let y = event.clientY;
    let endCoords = "End position X: " + x + ", End position Y: " + y;
    let text = window.getSelection().toString();
    this.setState({
      endCoords: endCoords,
      status: true,
      selectedText: text.trim()
    });
  };

  render() {
    const { contents } = this.props;
    const { startCoords, endCoords, status, selectedText } = this.state;
    const textLength = selectedText.length;
    console.log(selectedText.length);
    return (
      <React.Fragment>
        <Search />
        <div ref={this.refParagraph}>
          {get(contents, "chapters", []).map((chapter, index) => {
            return (
              <React.Fragment key={`${index}-${index}`}>
                <div className="chapters">
                  Chapter {get(chapter, "chapter", null)}
                </div>
                {get(chapter, "verses", []).map((verse, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Row
                        onMouseDown={event => this.handleMouseDown(event)}
                        onMouseUp={event => this.handleMouseUp(event)}
                        className="chapter-content"
                      >
                        <Col sm={1} className="verse-number">
                          {verse.verse}.
                        </Col>
                        <Col sm={11} className="verse-text">
                          {verse.text}
                        </Col>
                      </Row>
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
        <Popover
          selectionRef={this.refParagraph}
          isOpen={status && textLength !== 0 ? true : false}
        >
          <div className="popover-content">
            <p>{startCoords}</p>
            <p>{endCoords}</p>
          </div>
        </Popover>
      </React.Fragment>
    );
  }
}

export default Contents;
