import {
  CONTENT_REQUEST,
  CONTENT_SUCCESS,
  CONTENT_FAILURE
} from "../constants/actions";

import get from "lodash/get";
import { apiGet, generateUrl } from "./core";
import { apiBasePath } from "../config";
import { ENDPOINT } from "../constants/api";

export const getContentRequest = () => ({
  type: CONTENT_REQUEST,
  isFetching: true,
  errorMessage: ""
});

export const getContentSuccess = data => ({
  type: CONTENT_SUCCESS,
  isFetching: false,
  errorMessage: "",
  data
});

export const getContentFailure = errorMessage => ({
  type: CONTENT_FAILURE,
  isFetching: false,
  errorMessage
});

export const getContents = () => {
  return dispatch => {
    dispatch(getContentRequest());
    return apiGet({
      url: 'http://www.mocky.io/v2/5e23da7b3400005e00012b67'
      //url: generateUrl(apiBasePath, ENDPOINT.CONTENT)
    })
      .then(response =>
        dispatch(getContentSuccess(get(response, "data", [])))
      )
      .catch(err =>
        dispatch(getContentFailure(get(err, "message", [])))
      );
  };
};
