import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import get from "lodash/get";

import { Container } from "react-bootstrap";

import { getContents } from "../../actions/content";
import Contents from "./Contents";
import "./style.css";

class Home extends React.Component {
  componentDidMount() {
    const { getContents } = this.props;
    getContents();
  }

  render() {
    const { contents } = this.props;
    return (
      <Container fluid={true}>
        {contents && (
          <React.Fragment>
            <div className="book">{contents.book}</div>
            <Contents contents={contents} />
          </React.Fragment>
        )}
      </Container>
    );
  }
}

export const mapStateToProps = state => ({
  contents: get(state, "content.data")
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
