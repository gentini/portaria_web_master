import { all, call, takeLatest, put } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  GET_PEOPLETYPES_REQUEST,
  ADD_PEOPLETYPES_REQUEST,
  DELETE_PEOPLETYPES_REQUEST,
} from './types';

import {
  getPeopletypesRequest,
  getPeopletypesSuccess,
  addPeopletypesSuccess,
  deletePeopletypesSuccess,
} from './actions';

export function* getPeopletypes() {
  const response = yield call(api.get, 'peopletypes');

  yield put(getPeopletypesSuccess(response.data));
}

export function* addPeopletypes({ payload }) {
  const { name } = payload;

  yield call(api.post, 'peopletypes', {
    name,
  });

  yield put(addPeopletypesSuccess());
  yield put(getPeopletypesRequest());
}

export function* deletePeopletypes({ payload }) {
  yield call(api.delete, `peopletypes/${payload.id}`);

  yield put(deletePeopletypesSuccess());
  yield put(getPeopletypesRequest());
}

export default all([
  takeLatest(GET_PEOPLETYPES_REQUEST, getPeopletypes),
  takeLatest(ADD_PEOPLETYPES_REQUEST, addPeopletypes),
  takeLatest(DELETE_PEOPLETYPES_REQUEST, deletePeopletypes),
]);
