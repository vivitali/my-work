import { fromJS } from 'immutable';

export const LOAD_USERS_PENDING = 'my/LOAD_USERS_PENDING';
export const LOAD_USERS_SUCCESS = 'my/LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'my/LOAD_USERS_FAILURE';

export const loadUsersPending = () => ({
  type: LOAD_USERS_PENDING,
});
export const loadUsersSuccess = ({ users }) => {
  return {
    type: LOAD_USERS_SUCCESS,
    payload: users,
  };
};
export const loadUsersFailure = ({ error }) => ({
  type: LOAD_USERS_FAILURE,
  error,
});

const initialState = fromJS({
  loading: false,
  loaded: false,
  error: null,
  users: null,
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_PENDING: {
      return state.set('loading', true);
    }
    case LOAD_USERS_SUCCESS: {
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('users', action.payload);
    }
    case LOAD_USERS_FAILURE: {
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('error', action.error);
    }
    default:
      return state;
  }
};

export default usersReducer;
