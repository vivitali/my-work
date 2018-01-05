import { fromJS } from 'immutable';

export const LOAD_APP_PENDING = 'my/LOAD_APP_PENDING';
export const LOAD_APP_SUCCESS = 'my/LOAD_APP_SUCCESS';
export const LOAD_APP_FAILURE = 'my/LOAD_APP_FAILURE';

export const loadAppPending = () => ({
  type: LOAD_APP_PENDING,
});
export const loadAppSuccess = ({ branchData }) => {
  return {
    type: LOAD_APP_SUCCESS,
    payload: branchData,
  };
};
export const loadAppFailure = ({ error }) => ({
  type: LOAD_APP_FAILURE,
  error,
});

const initialState = fromJS({
  loading: false,
  loaded: false,
  error: null,
  branchData: null,
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APP_PENDING: {
      return state.set('loading', true);
    }
    case LOAD_APP_SUCCESS: {
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('branchData', action.payload);
    }
    case LOAD_APP_FAILURE: {
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('error', action.error);
    }
    default:
      return state;
  }
};

export default appReducer;
