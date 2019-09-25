import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  GET_PEOPLECONTROL_REQUEST,
  ADD_PEOPLECONTROL_REQUEST,
  UPDATE_PEOPLECONTROL_REQUEST,
  DELETE_PEOPLECONTROL_REQUEST,
  SET_CURRENT_PEOPLECONTROL_REQUEST,
} from './types';

import {
  getPeoplecontrolRequest,
  getPeoplecontrolSuccess,
  addPeoplecontrolSuccess,
  updatePeoplecontrolSuccess,
  deletePeoplecontrolSuccess,
  setCurrentPeoplecontrolSuccess,
} from './actions';

export function* getPeoplecontrol() {
  const response = yield call(api.get, 'peoplecontrols');

  yield put(getPeoplecontrolSuccess(response.data));
}

export function* addPeoplecontrol({ payload }) {
  const { people, dweller, company, vehicle, plate, note, exit } = payload;

  yield call(api.post, 'peoplecontrols', {
    people,
    dweller,
    company,
    vehicle,
    plate,
    note,
    exit,
    date: new Date(),
  });

  yield put(addPeoplecontrolSuccess());
  yield put(getPeoplecontrolRequest());
}

export function* updatePeoplecontrol({ payload }) {
  const { people, dweller, company, vehicle, plate, note, exit } = payload;

  const current = yield select(state => state.peoplecontrol.current);

  yield call(api.put, `peoplecontrols/${current.id}`, {
    people,
    dweller,
    company,
    vehicle,
    plate,
    note,
    exit,
    date: new Date(),
  });

  yield put(updatePeoplecontrolSuccess());
  yield put(getPeoplecontrolRequest());
}

export function* deletePeoplecontrol({ payload }) {
  yield call(api.delete, `peoplecontrols/${payload.id}`);

  yield put(deletePeoplecontrolSuccess());
  yield put(getPeoplecontrolRequest());
}

// Gets log selected by user and set current attribute to update
export function* currentPeoplecontrol({ payload }) {
  const peoplecontrols = yield select(
    state => state.peoplecontrol.peoplecontrols
  );

  const current = yield peoplecontrols.find(
    peoplecontrol => peoplecontrol.id === payload.id
  );

  yield put(setCurrentPeoplecontrolSuccess(current));
}

export default all([
  takeLatest(GET_PEOPLECONTROL_REQUEST, getPeoplecontrol),
  takeLatest(ADD_PEOPLECONTROL_REQUEST, addPeoplecontrol),
  takeLatest(UPDATE_PEOPLECONTROL_REQUEST, updatePeoplecontrol),
  takeLatest(DELETE_PEOPLECONTROL_REQUEST, deletePeoplecontrol),
  takeLatest(SET_CURRENT_PEOPLECONTROL_REQUEST, currentPeoplecontrol),
]);
