import produce from 'immer';

import {
  GET_PEOPLES_REQUEST,
  GET_PEOPLES_SUCCESS,
  ADD_PEOPLES_REQUEST,
  ADD_PEOPLES_SUCCESS,
  UPDATE_PEOPLES_REQUEST,
  UPDATE_PEOPLES_SUCCESS,
  SET_CURRENT_PEOPLE_REQUEST,
  SET_CURRENT_PEOPLE_SUCCESS,
  DELETE_PEOPLES_REQUEST,
  DELETE_PEOPLES_SUCCESS,
} from './types';

const INITIAL_STATE = {
  peoples: [],
  loading: false,
  error: null,
};

export default function people(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_PEOPLES_REQUEST: {
        draft.loading = true;
        break;
      }
      case GET_PEOPLES_SUCCESS: {
        draft.loading = false;
        draft.peoples = action.payload.data;
        break;
      }
      case ADD_PEOPLES_REQUEST: {
        draft.loading = true;
        break;
      }
      case ADD_PEOPLES_SUCCESS: {
        draft.loading = false;
        break;
      }
      case UPDATE_PEOPLES_REQUEST: {
        draft.loading = true;
        break;
      }
      case UPDATE_PEOPLES_SUCCESS: {
        draft.loading = false;
        draft.current = false;
        break;
      }
      case SET_CURRENT_PEOPLE_REQUEST: {
        draft.loading = false;
        break;
      }
      case SET_CURRENT_PEOPLE_SUCCESS: {
        draft.loading = false;
        draft.current = action.payload.data;
        break;
      }
      case DELETE_PEOPLES_REQUEST: {
        draft.loading = true;
        break;
      }
      case DELETE_PEOPLES_SUCCESS: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
