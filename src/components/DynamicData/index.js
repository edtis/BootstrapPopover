import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class DynamicData extends React.Component {
  render() {
    return <div>DynamicData</div>;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DynamicData)
);
