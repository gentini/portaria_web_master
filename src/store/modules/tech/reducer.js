import produce from 'immer';

import {
  GET_TECHS_REQUEST,
  GET_TECHS_SUCCESS,
  ADD_TECH_REQUEST,
  ADD_TECH_SUCCESS,
  DELETE_TECH_REQUEST,
  DELETE_TECH_SUCCESS,
} from './types';

const INITIAL_STATE = {
  techs: [],
  loading: false,
  error: null,
};

export default function tech(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_TECHS_REQUEST: {
        draft.loading = true;
        break;
      }
      case GET_TECHS_SUCCESS: {
        draft.loading = false;
        draft.techs = action.payload.data;
        break;
      }
      case ADD_TECH_REQUEST: {
        draft.loading = true;
        break;
      }
      case ADD_TECH_SUCCESS: {
        draft.loading = false;
        break;
      }
      case DELETE_TECH_REQUEST: {
        draft.loading = true;
        break;
      }
      case DELETE_TECH_SUCCESS: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
