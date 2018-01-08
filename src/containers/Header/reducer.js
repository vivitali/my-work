import { fromJS } from 'immutable';

export const LOAD_BRANCH_PENDING = 'my/LOAD_BRANCH_PENDING';
export const LOAD_BRANCH_SUCCESS = 'my/LOAD_BRANCH_SUCCESS';
export const LOAD_BRANCH_FAILURE = 'my/LOAD_BRANCH_FAILURE';

export const loadBranchPending = () => ({
  type: LOAD_BRANCH_PENDING,
});
export const loadBranchSuccess = ({ data }) => {
  return {
    type: LOAD_BRANCH_SUCCESS,
    payload: data,
  };
};
export const loadBranchFailure = ({ error }) => ({
  type: LOAD_BRANCH_FAILURE,
  error,
});

const initialState = fromJS({
  loading: false,
  loaded: false,
  error: null,
  branch: null,
});

const myWorkReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BRANCH_PENDING: {
      return state.set('loading', true);
    }
    case LOAD_BRANCH_SUCCESS: {
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('branch', action.payload);
    }
    case LOAD_BRANCH_FAILURE: {
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('error', action.error);
    }
    default:
      return state;
  }
};

export default myWorkReducer;
