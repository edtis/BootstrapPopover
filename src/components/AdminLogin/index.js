import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import get from "lodash/get";

class AdminLogin extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="page-wrapper full-page">
          <div className="page-content d-flex align-items-center justify-content-center">
            <div className="row w-100 mx-0 auth-page">
              <div className="col-xl-4 col-lg-5 col-md-8 mx-auto">
                <div className="card">
                  <div className="row">
                    <div className="col-xl-8 col-lg-5 col-md-8 pl-md-0">
                      <div className="auth-form-wrapper px-4 py-5">
                        <a href="#" className="noble-ui-logo d-block mb-2">
                          Good<span>Book</span>Bible
                        </a>
                        <h5 className="text-muted font-weight-normal mb-4">
                          Authroized access only
                        </h5>
                        <form className="forms-sample">
                          <div className="form-group">
                            <label htmlFor="exampleInputUsername1">
                              Username
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputUsername1"
                              placeholder="Username"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              autoComplete="current-password"
                              placeholder="Password"
                            />
                          </div>
                          <div className="mt-3">
                            <button
                              type="submit"
                              className="btn btn-primary mr-2 mb-2 mb-md-0"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminLogin)
);
