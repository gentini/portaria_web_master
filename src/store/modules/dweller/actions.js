import {
  GET_DWELLERS_REQUEST,
  GET_DWELLERS_SUCCESS,
  ADD_DWELLERS_REQUEST,
  ADD_DWELLERS_SUCCESS,
  UPDATE_DWELLERS_REQUEST,
  UPDATE_DWELLERS_SUCCESS,
  SET_CURRENT_DWELLERS_REQUEST,
  SET_CURRENT_DWELLERS_SUCCESS,
  DELETE_DWELLERS_REQUEST,
  DELETE_DWELLERS_SUCCESS,
} from './types';

export function getDwellersRequest() {
  return {
    type: GET_DWELLERS_REQUEST,
  };
}

export function getDwellersSuccess(data) {
  return {
    type: GET_DWELLERS_SUCCESS,
    payload: { data },
  };
}

export function addDwellersRequest(name, family, phone, address, note) {
  return {
    type: ADD_DWELLERS_REQUEST,
    payload: { name, family, phone, address, note },
  };
}

export function addDwellersSuccess() {
  return {
    type: ADD_DWELLERS_SUCCESS,
  };
}

export function updateDwellersRequest(name, family, phone, address, note) {
  return {
    type: UPDATE_DWELLERS_REQUEST,
    payload: { name, family, phone, address, note },
  };
}

export function updateDwellersSuccess() {
  return {
    type: UPDATE_DWELLERS_SUCCESS,
  };
}

export function setCurrentDwellersRequest(id) {
  return {
    type: SET_CURRENT_DWELLERS_REQUEST,
    payload: { id },
  };
}

export function setCurrentDwellersSuccess(data) {
  return {
    type: SET_CURRENT_DWELLERS_SUCCESS,
    payload: { data },
  };
}

export function deleteDwellersRequest(id) {
  return {
    type: DELETE_DWELLERS_REQUEST,
    payload: { id },
  };
}

export function deleteDwellersSuccess() {
  return {
    type: DELETE_DWELLERS_SUCCESS,
  };
}
