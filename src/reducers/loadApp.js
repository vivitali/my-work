export const LOAD_MY_WORK_PENDING = 'my/LOAD_MY_WORK_PENDING';
export const LOAD_MY_WORK_SUCCESS = 'my/LOAD_MY_WORK_SUCCESS';
export const LOAD_MY_WORK_FAILURE = 'my/LOAD_MY_WORK_FAILURE';

export const loadMyWorkPending = () => ({
  type: LOAD_MY_WORK_PENDING,
});
export const loadMyWorkSuccess = ({ data }) => ({
  type: LOAD_MY_WORK_SUCCESS,
  payload: data,
});
export const loadMyWorkFailure = ({ error }) => ({
  type: LOAD_MY_WORK_FAILURE,
  error,
});

const initialState = {
  loading: false,
  loaded: true,
  error: null,
  data: {},
};

const loadApp = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MY_WORK_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_MY_WORK_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
      };
    }
    case LOAD_MY_WORK_FAILURE: {
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

export default loadApp;
