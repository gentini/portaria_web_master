import {
  GET_TECHS_REQUEST,
  GET_TECHS_SUCCESS,
  ADD_TECH_REQUEST,
  ADD_TECH_SUCCESS,
  DELETE_TECH_REQUEST,
  DELETE_TECH_SUCCESS,
} from './types';

export function getTechsRequest() {
  return {
    type: GET_TECHS_REQUEST,
  };
}

export function getTechsSuccess(data) {
  return {
    type: GET_TECHS_SUCCESS,
    payload: { data },
  };
}

export function addTechRequest(firstName, lastName) {
  return {
    type: ADD_TECH_REQUEST,
    payload: { firstName, lastName },
  };
}

export function addTechSuccess() {
  return {
    type: ADD_TECH_SUCCESS,
  };
}

export function deleteTechRequest(id) {
  return {
    type: DELETE_TECH_REQUEST,
    payload: { id },
  };
}

export function deleteTechSuccess() {
  return {
    type: DELETE_TECH_SUCCESS,
  };
}
