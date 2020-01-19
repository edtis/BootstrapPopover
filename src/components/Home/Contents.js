import React from 'react';
import get from "lodash/get";

import { Row, Popover, OverlayTrigger, Col  } from 'react-bootstrap';

class Contents extends React.Component {

  state = {
    startCoords: 0,
    endCoords: 0
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
    this.setState({
      endCoords: endCoords
    })
  }

  render() {
    const { contents } = this.props;
    const { startCoords, endCoords } = this.state;
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
                          trigger="hover"
                          overlay={
                            <Popover id="popover-basic">
                              <Popover.Content>
                                <p>{startCoords}</p>
                                <p>{endCoords}</p>
                              </Popover.Content>
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