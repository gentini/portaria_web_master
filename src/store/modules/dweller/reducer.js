import produce from 'immer';

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

const INITIAL_STATE = {
  dwellers: [],
  loading: false,
  error: null,
};

export default function dweller(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_DWELLERS_REQUEST: {
        draft.loading = true;
        break;
      }
      case GET_DWELLERS_SUCCESS: {
        draft.loading = false;
        draft.dwellers = action.payload.data;
        break;
      }
      case ADD_DWELLERS_REQUEST: {
        draft.loading = true;
        break;
      }
      case ADD_DWELLERS_SUCCESS: {
        draft.loading = false;
        break;
      }
      case UPDATE_DWELLERS_REQUEST: {
        draft.loading = true;
        break;
      }
      case UPDATE_DWELLERS_SUCCESS: {
        draft.loading = false;
        draft.current = false;
        break;
      }
      case SET_CURRENT_DWELLERS_REQUEST: {
        draft.loading = false;
        break;
      }
      case SET_CURRENT_DWELLERS_SUCCESS: {
        draft.loading = false;
        draft.current = action.payload.data;
        break;
      }
      case DELETE_DWELLERS_REQUEST: {
        draft.loading = true;
        break;
      }
      case DELETE_DWELLERS_SUCCESS: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
