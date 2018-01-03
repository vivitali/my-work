import { combineReducers } from 'redux-immutable';
import loadApp from './loadApp';
import { routerReducer } from 'react-router-redux';

export default function createReducer(injectedReducers) {
  return combineReducers({
    loadApp,
    routing: routerReducer,
    ...injectedReducers,
  });
}
