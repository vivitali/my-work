import { fromJS } from 'immutable';

export const LOAD_USERS_PENDING = 'my/LOAD_USERS_PENDING';
export const LOAD_USERS_SUCCESS = 'my/LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'my/LOAD_USERS_FAILURE';

export const loadUsersPending = () => ({
  type: LOAD_USERS_PENDING,
});
export const loadUsersSuccess = ({ data }) => ({
  type: LOAD_USERS_SUCCESS,
  payload: data,
});
export const loadUsersFailure = ({ error }) => ({
  type: LOAD_USERS_FAILURE,
  error,
});

const initialState = fromJS({
  loading: false,
  loaded: true,
  error: null,
  users: {},
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        users: action.payload,
      };
    }
    case LOAD_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
