import { all, call, takeLatest, put } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  GET_TECHS_REQUEST,
  ADD_TECH_REQUEST,
  DELETE_TECH_REQUEST,
} from './types';

import {
  getTechsRequest,
  getTechsSuccess,
  addTechSuccess,
  deleteTechSuccess,
} from './actions';

export function* getTechs() {
  const response = yield call(api.get, 'techs');

  yield put(getTechsSuccess(response.data));
}

export function* addTech({ payload }) {
  const { firstName, lastName } = payload;

  yield call(api.post, 'techs', {
    firstName,
    lastName,
  });

  yield put(addTechSuccess());
  yield put(getTechsRequest());
}

export function* deleteTech({ payload }) {
  yield call(api.delete, `techs/${payload.id}`);

  yield put(deleteTechSuccess());
  yield put(getTechsRequest());
}

export default all([
  takeLatest(GET_TECHS_REQUEST, getTechs),
  takeLatest(ADD_TECH_REQUEST, addTech),
  takeLatest(DELETE_TECH_REQUEST, deleteTech),
]);
