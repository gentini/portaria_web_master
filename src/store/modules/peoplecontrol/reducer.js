import produce from 'immer';

import {
  GET_PEOPLECONTROL_REQUEST,
  GET_PEOPLECONTROL_SUCCESS,
  ADD_PEOPLECONTROL_REQUEST,
  ADD_PEOPLECONTROL_SUCCESS,
  UPDATE_PEOPLECONTROL_REQUEST,
  UPDATE_PEOPLECONTROL_SUCCESS,
  SET_CURRENT_PEOPLECONTROL_REQUEST,
  SET_CURRENT_PEOPLECONTROL_SUCCESS,
  DELETE_PEOPLECONTROL_REQUEST,
  DELETE_PEOPLECONTROL_SUCCESS,
} from './types';

const INITIAL_STATE = {
  peoplecontrols: [],
  loading: false,
  error: null,
  current: null,
};

export default function peoplecontrol(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_PEOPLECONTROL_REQUEST: {
        draft.loading = true;
        break;
      }
      case GET_PEOPLECONTROL_SUCCESS: {
        draft.loading = false;
        draft.peoplecontrols = action.payload.data;
        break;
      }
      case ADD_PEOPLECONTROL_REQUEST: {
        draft.loading = true;
        break;
      }
      case ADD_PEOPLECONTROL_SUCCESS: {
        draft.loading = false;
        break;
      }
      case UPDATE_PEOPLECONTROL_REQUEST: {
        draft.loading = true;
        break;
      }
      case UPDATE_PEOPLECONTROL_SUCCESS: {
        draft.loading = false;
        draft.current = false;
        break;
      }
      case SET_CURRENT_PEOPLECONTROL_REQUEST: {
        draft.loading = false;
        break;
      }
      case SET_CURRENT_PEOPLECONTROL_SUCCESS: {
        draft.loading = false;
        draft.current = action.payload.data;
        break;
      }
      case DELETE_PEOPLECONTROL_REQUEST: {
        draft.loading = true;
        break;
      }
      case DELETE_PEOPLECONTROL_SUCCESS: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
