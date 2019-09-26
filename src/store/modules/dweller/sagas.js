import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  GET_DWELLERS_REQUEST,
  ADD_DWELLERS_REQUEST,
  UPDATE_DWELLERS_REQUEST,
  DELETE_DWELLERS_REQUEST,
  SET_CURRENT_DWELLERS_REQUEST,
} from './types';

import {
  getDwellersRequest,
  getDwellersSuccess,
  addDwellersSuccess,
  updateDwellersSuccess,
  deleteDwellersSuccess,
  setCurrentDwellersSuccess,
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

export function* updateDwellers({ payload }) {
  const { name, family, phone, address, note } = payload;

  const current = yield select(state => state.dweller.current);

  yield call(api.put, `dwellers/${current.id}`, {
    name,
    family,
    phone,
    address,
    note,
  });

  yield put(updateDwellersSuccess());
  yield put(getDwellersRequest());
}

export function* deleteDwellers({ payload }) {
  yield call(api.delete, `dwellers/${payload.id}`);

  yield put(deleteDwellersSuccess());
  yield put(getDwellersRequest());
}

// Gets log selected by user and set current attribute to update
export function* currentDwellers({ payload }) {
  const dwellers = yield select(state => state.dweller.dwellers);

  const current = yield dwellers.find(dweller => dweller.id === payload.id);

  yield put(setCurrentDwellersSuccess(current));
}

export default all([
  takeLatest(GET_DWELLERS_REQUEST, getDwellers),
  takeLatest(ADD_DWELLERS_REQUEST, addDwellers),
  takeLatest(UPDATE_DWELLERS_REQUEST, updateDwellers),
  takeLatest(DELETE_DWELLERS_REQUEST, deleteDwellers),
  takeLatest(SET_CURRENT_DWELLERS_REQUEST, currentDwellers),
]);
