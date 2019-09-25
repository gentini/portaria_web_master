import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  GET_PEOPLES_REQUEST,
  ADD_PEOPLES_REQUEST,
  UPDATE_PEOPLES_REQUEST,
  DELETE_PEOPLES_REQUEST,
  SET_CURRENT_PEOPLE_REQUEST,
} from './types';

import {
  getPeoplesRequest,
  getPeoplesSuccess,
  addPeoplesSuccess,
  updatePeoplesSuccess,
  deletePeoplesSuccess,
  setCurrentPeopleSuccess,
} from './actions';

export function* getPeoples() {
  const response = yield call(api.get, 'peoples');

  yield put(getPeoplesSuccess(response.data));
}

export function* addPeoples({ payload }) {
  const { name, rg, cpf, phone, address, city, uf, peopletype } = payload;

  yield call(api.post, 'peoples', {
    name,
    rg,
    cpf,
    phone,
    address,
    city,
    uf,
    peopletype,
  });

  yield put(addPeoplesSuccess());
  yield put(getPeoplesRequest());
}

export function* updatePeoples({ payload }) {
  const { name, rg, cpf, phone, address, city, uf, peopletype } = payload;

  const current = yield select(state => state.people.current);

  yield call(api.put, `peoples/${current.id}`, {
    name,
    rg,
    cpf,
    phone,
    address,
    city,
    uf,
    peopletype,
  });

  yield put(updatePeoplesSuccess());
  yield put(getPeoplesRequest());
}

export function* deletePeoples({ payload }) {
  yield call(api.delete, `peoples/${payload.id}`);

  yield put(deletePeoplesSuccess());
  yield put(getPeoplesRequest());
}

// Gets log selected by user and set current attribute to update
export function* currentPeoples({ payload }) {
  const peoples = yield select(state => state.people.peoples);

  const current = yield peoples.find(people => people.id === payload.id);

  yield put(setCurrentPeopleSuccess(current));
}

export default all([
  takeLatest(GET_PEOPLES_REQUEST, getPeoples),
  takeLatest(ADD_PEOPLES_REQUEST, addPeoples),
  takeLatest(UPDATE_PEOPLES_REQUEST, updatePeoples),
  takeLatest(DELETE_PEOPLES_REQUEST, deletePeoples),
  takeLatest(SET_CURRENT_PEOPLE_REQUEST, currentPeoples),
]);
