import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ChapterView extends React.Component {
  render() {
    return <div>ChapterView</div>;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChapterView)
);
