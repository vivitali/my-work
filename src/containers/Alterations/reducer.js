import { fromJS } from 'immutable';

export const LOAD_ALTERS_PENDING = 'my/LOAD_ALTERS_PENDING';
export const LOAD_ALTERS_SUCCESS = 'my/LOAD_ALTERS_SUCCESS';
export const LOAD_ALTERS_FAILURE = 'my/LOAD_ALTERS_FAILURE';

export const loadAltersPending = () => ({
  type: LOAD_ALTERS_PENDING,
});
export const loadAltersSuccess = ({ data }) => {
  return {
    type: LOAD_ALTERS_SUCCESS,
    payload: data,
  };
};
export const loadAltersFailure = ({ error }) => ({
  type: LOAD_ALTERS_FAILURE,
  error,
});

const initialState = fromJS({
  loading: false,
  loaded: false,
  error: null,
  users: null,
});

const altersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALTERS_PENDING: {
      return state.set('loading', true);
    }
    case LOAD_ALTERS_SUCCESS: {
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('data', action.payload);
    }
    case LOAD_ALTERS_FAILURE: {
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('error', action.error);
    }
    default:
      return state;
  }
};

export default altersReducer;
