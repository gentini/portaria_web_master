import {
  GET_LOGS_REQUEST,
  GET_LOGS_SUCCESS,
  ADD_LOG_REQUEST,
  ADD_LOG_SUCCESS,
  UPDATE_LOG_REQUEST,
  UPDATE_LOG_SUCCESS,
  SET_CURRENT_REQUEST,
  SET_CURRENT_SUCCESS,
  SEARCH_LOGS_REQUEST,
  SEARCH_LOGS_SUCCESS,
  DELETE_LOG_REQUEST,
  DELETE_LOG_SUCCESS,
} from './types';

export function getLogsRequest() {
  return {
    type: GET_LOGS_REQUEST,
  };
}

export function getLogsSuccess(data) {
  return {
    type: GET_LOGS_SUCCESS,
    payload: { data },
  };
}

export function addLogRequest(message, attention, tech) {
  return {
    type: ADD_LOG_REQUEST,
    payload: { message, attention, tech },
  };
}

export function addLogSuccess() {
  return {
    type: ADD_LOG_SUCCESS,
    payload: { loading: false },
  };
}

export function updateLogRequest(message, attention, tech) {
  return {
    type: UPDATE_LOG_REQUEST,
    payload: { message, attention, tech },
  };
}

export function updateLogSuccess() {
  return {
    type: UPDATE_LOG_SUCCESS,
  };
}

export function setCurrentRequest(id) {
  return {
    type: SET_CURRENT_REQUEST,
    payload: { id },
  };
}

export function setCurrentSuccess(data) {
  return {
    type: SET_CURRENT_SUCCESS,
    payload: { data },
  };
}

export function setSearchLogRequest(text) {
  return {
    type: SEARCH_LOGS_REQUEST,
    payload: { text },
  };
}

export function setSearchLogSuccess(data) {
  return {
    type: SEARCH_LOGS_SUCCESS,
    payload: { data },
  };
}

export function deleteLogRequest(id) {
  return {
    type: DELETE_LOG_REQUEST,
    payload: { id },
  };
}

export function deleteLogSuccess() {
  return {
    type: DELETE_LOG_SUCCESS,
  };
}
