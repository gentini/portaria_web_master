import { all, call, takeLatest, put } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  GET_DWELLERS_REQUEST,
  ADD_DWELLERS_REQUEST,
  DELETE_DWELLERS_REQUEST,
} from './types';

import {
  getDwellersRequest,
  getDwellersSuccess,
  addDwellersSuccess,
  deleteDwellersSuccess,
} from './actions';

export function* getDwellers() {
  const response = yield call(api.get, 'dwellers');

  yield put(getDwellersSuccess(response.data));
}

export function* addDwellers({ payload }) {
  const { name, family, phone, address, note } = payload;

  yield call(api.post, 'dwellers', {
    name,
    family,
    phone,
    address,
    note,
  });

  yield put(addDwellersSuccess());
  yield put(getDwellersRequest());
}

export function* deleteDwellers({ payload }) {
  yield call(api.delete, `dwellers/${payload.id}`);

  yield put(deleteDwellersSuccess());
  yield put(getDwellersRequest());
}

export default all([
  takeLatest(GET_DWELLERS_REQUEST, getDwellers),
  takeLatest(ADD_DWELLERS_REQUEST, addDwellers),
  takeLatest(DELETE_DWELLERS_REQUEST, deleteDwellers),
]);
