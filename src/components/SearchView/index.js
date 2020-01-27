import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SearchView extends React.Component {
  render() {
    return <div>SearchView</div>;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchView)
);
