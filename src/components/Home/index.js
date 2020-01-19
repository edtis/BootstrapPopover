import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import get from "lodash/get";

import { Container, Row, Popover, OverlayTrigger } from 'react-bootstrap';

import { getContents } from '../../actions/content';
import Contents from './Contents';
import './style.css'

class Home extends React.Component {

  state = {
    startCoords: null,
    endCoords: null
  }

  componentDidMount() {
    const { getContents } = this.props;
    getContents();
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
      <Container fluid={true}>
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
          >
            <Contents contents={contents}/>
          </Row>
        </OverlayTrigger>
      </Container>
    )
  }
}

export const mapStateToProps = state => ({
  contents: get(state, 'content.data')
});

export const mapDispatchToProps = dispatch => ({
  getContents() {
    dispatch(getContents());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);