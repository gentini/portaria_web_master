import {
  GET_PEOPLETYPES_REQUEST,
  GET_PEOPLETYPES_SUCCESS,
  ADD_PEOPLETYPES_REQUEST,
  ADD_PEOPLETYPES_SUCCESS,
  DELETE_PEOPLETYPES_REQUEST,
  DELETE_PEOPLETYPES_SUCCESS,
} from './types';

export function getPeopletypesRequest() {
  return {
    type: GET_PEOPLETYPES_REQUEST,
  };
}

export function getPeopletypesSuccess(data) {
  return {
    type: GET_PEOPLETYPES_SUCCESS,
    payload: { data },
  };
}

export function addPeopletypesRequest(name) {
  return {
    type: ADD_PEOPLETYPES_REQUEST,
    payload: { name },
  };
}

export function addPeopletypesSuccess() {
  return {
    type: ADD_PEOPLETYPES_SUCCESS,
  };
}

export function deletePeopletypesRequest(id) {
  return {
    type: DELETE_PEOPLETYPES_REQUEST,
    payload: { id },
  };
}

export function deletePeopletypesSuccess() {
  return {
    type: DELETE_PEOPLETYPES_SUCCESS,
  };
}
