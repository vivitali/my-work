export const LOAD_MENU_PENDING = 'my/LOAD_MENU_PENDING';
export const LOAD_MENU_SUCCESS = 'my/LOAD_MENU_SUCCESS';
export const LOAD_MENU_FAILURE = 'my/LOAD_MENU_FAILURE';

export const loadMenuPending = () => ({
  type: LOAD_MENU_PENDING,
});
export const loadMenuSuccess = ({ data }) => ({
  type: LOAD_MENU_SUCCESS,
  payload: data,
});
export const loadMenuFailure = ({ error }) => ({
  type: LOAD_MENU_FAILURE,
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
    case LOAD_MENU_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_MENU_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
      };
    }
    case LOAD_MENU_FAILURE: {
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
