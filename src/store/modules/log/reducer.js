import produce from 'immer';
import {
  GET_LOGS_REQUEST,
  GET_LOGS_SUCCESS,
  ADD_LOG_REQUEST,
  ADD_LOG_SUCCESS,
  UPDATE_LOG_REQUEST,
  UPDATE_LOG_SUCCESS,
  SET_CURRENT_REQUEST,
  SET_CURRENT_SUCCESS,
  SEARCH_LOGS_REQUEST,
  SEARCH_LOGS_SUCCESS,
  DELETE_LOG_REQUEST,
  DELETE_LOG_SUCCESS,
} from './types';

const INITIAL_STATE = {
  logs: [],
  current: null,
  loading: false,
};

export default function log(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_LOGS_REQUEST: {
        draft.loading = true;
        break;
      }
      case GET_LOGS_SUCCESS: {
        draft.logs = action.payload.data;
        draft.loading = false;
        break;
      }
      case ADD_LOG_REQUEST: {
        draft.loading = true;
        break;
      }
      case ADD_LOG_SUCCESS: {
        draft.loading = false;
        break;
      }
      case UPDATE_LOG_REQUEST: {
        draft.loading = true;
        break;
      }
      case UPDATE_LOG_SUCCESS: {
        draft.loading = false;
        draft.current = false;
        break;
      }
      case SET_CURRENT_REQUEST: {
        draft.loading = false;
        break;
      }
      case SET_CURRENT_SUCCESS: {
        draft.loading = false;
        draft.current = action.payload.data;
        break;
      }
      case SEARCH_LOGS_REQUEST: {
        draft.loading = true;
        break;
      }
      case SEARCH_LOGS_SUCCESS: {
        draft.loading = false;
        draft.logs = action.payload.data;
        break;
      }
      case DELETE_LOG_REQUEST: {
        draft.loading = true;
        break;
      }
      case DELETE_LOG_SUCCESS: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
