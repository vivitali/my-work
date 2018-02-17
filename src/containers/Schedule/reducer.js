import { fromJS } from 'immutable';

export const LOAD_SCHEDULE_PENDING = 'my/LOAD_SCHEDULE_PENDING';
export const LOAD_SCHEDULE_SUCCESS = 'my/LOAD_SCHEDULE_SUCCESS';
export const LOAD_SCHEDULE_FAILURE = 'my/LOAD_SCHEDULE_FAILURE';

export const loadSchedulePending = () => ({
  type: LOAD_SCHEDULE_PENDING,
});
export const loadScheduleSuccess = ({ users }) => {
  return {
    type: LOAD_SCHEDULE_SUCCESS,
    payload: users,
  };
};
export const loadScheduleFailure = ({ error }) => ({
  type: LOAD_SCHEDULE_FAILURE,
  error,
});

const initialState = fromJS({
  loading: false,
  loaded: false,
  error: null,
  schedule: null,
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SCHEDULE_PENDING: {
      return state.set('loading', true);
    }
    case LOAD_SCHEDULE_SUCCESS: {
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('schedule', action.payload);
    }
    case LOAD_SCHEDULE_FAILURE: {
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
