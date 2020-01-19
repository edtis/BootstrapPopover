import deepFreeze from "deep-freeze-es6";
import {
  CONTENT_REQUEST,
  CONTENT_SUCCESS,
  CONTENT_FAILURE
} from "../constants/actions";

const initialState = {
  isFetching: false,
  data: {},
  errorMessage: "",
};

export const getContentRequest = (state, action) => {
  return {
    ...state,
    isFetching: action.isFetching,
    errorMessage: action.errorMessage
  };
};

export const getContentSuccess = (state, action) => {
  return {
    ...state,
    isFetching: action.isFetching,
    errorMessage: action.errorMessage,
    data: action.data
  };
};

export const getContentFailure = (state, action) => {
  return {
    ...state,
    isFetching: action.isFetching,
    errorMessage: action.errorMessage,
    data: action.data
  };
};


export default (state = initialState, action) => {
  deepFreeze(state);
  deepFreeze(action);

  switch (action.type) {
    case CONTENT_REQUEST:
      return getContentRequest(state, action);
    case CONTENT_SUCCESS:
      return getContentSuccess(state, action);
    case CONTENT_FAILURE:
      return getContentFailure(state, action);
    default:
      return state;
  }
};