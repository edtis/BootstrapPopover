import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class AdminView extends React.Component {
  render() {
    return <div>Admin View</div>;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminView)
);
