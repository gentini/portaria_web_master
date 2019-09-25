import {
  GET_PEOPLES_REQUEST,
  GET_PEOPLES_SUCCESS,
  ADD_PEOPLES_REQUEST,
  ADD_PEOPLES_SUCCESS,
  UPDATE_PEOPLES_REQUEST,
  UPDATE_PEOPLES_SUCCESS,
  SET_CURRENT_PEOPLE_REQUEST,
  SET_CURRENT_PEOPLE_SUCCESS,
  DELETE_PEOPLES_REQUEST,
  DELETE_PEOPLES_SUCCESS,
} from './types';

export function getPeoplesRequest() {
  return {
    type: GET_PEOPLES_REQUEST,
  };
}

export function getPeoplesSuccess(data) {
  return {
    type: GET_PEOPLES_SUCCESS,
    payload: { data },
  };
}

export function addPeoplesRequest(
  name,
  rg,
  cpf,
  phone,
  address,
  city,
  uf,
  peopletype
) {
  return {
    type: ADD_PEOPLES_REQUEST,
    payload: { name, rg, cpf, phone, address, city, uf, peopletype },
  };
}

export function addPeoplesSuccess() {
  return {
    type: ADD_PEOPLES_SUCCESS,
  };
}

export function updatePeoplesRequest(
  name,
  rg,
  cpf,
  phone,
  address,
  city,
  uf,
  peopletype
) {
  return {
    type: UPDATE_PEOPLES_REQUEST,
    payload: { name, rg, cpf, phone, address, city, uf, peopletype },
  };
}

export function updatePeoplesSuccess() {
  return {
    type: UPDATE_PEOPLES_SUCCESS,
  };
}

export function setCurrentPeopleRequest(id) {
  return {
    type: SET_CURRENT_PEOPLE_REQUEST,
    payload: { id },
  };
}

export function setCurrentPeopleSuccess(data) {
  return {
    type: SET_CURRENT_PEOPLE_SUCCESS,
    payload: { data },
  };
}

export function deletePeoplesRequest(id) {
  return {
    type: DELETE_PEOPLES_REQUEST,
    payload: { id },
  };
}

export function deletePeoplesSuccess() {
  return {
    type: DELETE_PEOPLES_SUCCESS,
  };
}
