import React from 'react';
import get from "lodash/get";
import $ from "jquery";

import { Row, Popover, OverlayTrigger, Col  } from 'react-bootstrap';

class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startCoords: 0,
      endCoords: 0,
      selection: ''
    }
  }

  handleMouseDown = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    let startCoords = "Start position X: " + x + ", Start position Y: " + y;
    this.setState({
      startCoords: startCoords
    })
  }

  handleMouseUp = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    let endCoords = "End position X: " + x + ", End position Y: " + y;
    let selection = this.getSelected();
        selection = $.trim(selection);
        this.setState({
          endCoords: endCoords,
          selection: selection
        })
  }

  getSelected = () => {
    if (window.getSelection) {
      return window.getSelection();
    } else if (document.getSelection) {
      return document.getSelection();
    } else {
      var selection = document.selection && document.selection.createRange();
      if (selection.text) {
        return selection.text;
      }
      return false;
    }
  }

  render() {
    const { contents } = this.props;
    const { startCoords, endCoords, selection } = this.state;
    let contentLength = selection.length;
    return (
      <React.Fragment>
        {
         get(contents, "chapters", []).map((chapter, index) => {
            return (
              <React.Fragment key={`${index}-${index}`}>
                <div className="chapters">Chapter {get(chapter, 'chapter', null)}</div>
                {
                  get(chapter, 'verses', []).map((verse, index) => {
                    return (
                      <React.Fragment key={index}>
                        <OverlayTrigger
                          placement="bottom"
                          trigger="click"
                          rootClose={true}
                          overlay={
                            <Popover 
                              id={contentLength > 0 ? 'popover-basic' : 'popover-basic-hide'}
                            >
                              {
                                contentLength > 0 && (
                                  <Popover.Content>
                                    <p>{startCoords}</p>
                                    <p>{endCoords}</p>
                                  </Popover.Content>
                                )
                              }
                            </Popover>
                          }
                        >
                          <Row 
                            onMouseDown={event => this.handleMouseDown(event)}
                            onMouseUp={event => this.handleMouseUp(event)}
                            className="chapter-content"
                          >
                            <Col sm={1} className="verse-number">{verse.verse}.</Col>
                            <Col sm={11} className="verse-text">{verse.text}</Col>
                          </Row>
                        </OverlayTrigger>
                      </React.Fragment>
                    )
                  })
                }
              </React.Fragment>
            )
          })
        }
      </React.Fragment>
    )
  }
}

export default Contents;