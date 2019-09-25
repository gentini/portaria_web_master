import produce from 'immer';

import {
  GET_PEOPLETYPES_REQUEST,
  GET_PEOPLETYPES_SUCCESS,
  ADD_PEOPLETYPES_REQUEST,
  ADD_PEOPLETYPES_SUCCESS,
  DELETE_PEOPLETYPES_REQUEST,
  DELETE_PEOPLETYPES_SUCCESS,
} from './types';

const INITIAL_STATE = {
  peopletypes: [],
  loading: false,
  error: null,
};

export default function peopletype(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_PEOPLETYPES_REQUEST: {
        draft.loading = true;
        break;
      }
      case GET_PEOPLETYPES_SUCCESS: {
        draft.loading = false;
        draft.peopletypes = action.payload.data;
        break;
      }
      case ADD_PEOPLETYPES_REQUEST: {
        draft.loading = true;
        break;
      }
      case ADD_PEOPLETYPES_SUCCESS: {
        draft.loading = false;
        break;
      }
      case DELETE_PEOPLETYPES_REQUEST: {
        draft.loading = true;
        break;
      }
      case DELETE_PEOPLETYPES_SUCCESS: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
