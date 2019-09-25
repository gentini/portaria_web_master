import {
  GET_PEOPLECONTROL_REQUEST,
  GET_PEOPLECONTROL_SUCCESS,
  ADD_PEOPLECONTROL_REQUEST,
  ADD_PEOPLECONTROL_SUCCESS,
  UPDATE_PEOPLECONTROL_REQUEST,
  UPDATE_PEOPLECONTROL_SUCCESS,
  SET_CURRENT_PEOPLECONTROL_REQUEST,
  SET_CURRENT_PEOPLECONTROL_SUCCESS,
  DELETE_PEOPLECONTROL_REQUEST,
  DELETE_PEOPLECONTROL_SUCCESS,
} from './types';

export function getPeoplecontrolRequest() {
  return {
    type: GET_PEOPLECONTROL_REQUEST,
  };
}

export function getPeoplecontrolSuccess(data) {
  return {
    type: GET_PEOPLECONTROL_SUCCESS,
    payload: { data },
  };
}

export function addPeoplecontrolRequest(
  people,
  dweller,
  company,
  vehicle,
  plate,
  note,
  exit
) {
  return {
    type: ADD_PEOPLECONTROL_REQUEST,
    payload: { people, dweller, company, vehicle, plate, note, exit },
  };
}

export function addPeoplecontrolSuccess() {
  return {
    type: ADD_PEOPLECONTROL_SUCCESS,
  };
}

export function updatePeoplecontrolRequest(
  people,
  dweller,
  company,
  vehicle,
  plate,
  note,
  exit
) {
  return {
    type: UPDATE_PEOPLECONTROL_REQUEST,
    payload: { people, dweller, company, vehicle, plate, note, exit },
  };
}

export function updatePeoplecontrolSuccess() {
  return {
    type: UPDATE_PEOPLECONTROL_SUCCESS,
  };
}

export function setCurrentPeoplecontrolRequest(id) {
  return {
    type: SET_CURRENT_PEOPLECONTROL_REQUEST,
    payload: { id },
  };
}

export function setCurrentPeoplecontrolSuccess(data) {
  return {
    type: SET_CURRENT_PEOPLECONTROL_SUCCESS,
    payload: { data },
  };
}

export function deletePeoplecontrolRequest(id) {
  return {
    type: DELETE_PEOPLECONTROL_REQUEST,
    payload: { id },
  };
}

export function deletePeoplecontrolSuccess() {
  return {
    type: DELETE_PEOPLECONTROL_SUCCESS,
  };
}
