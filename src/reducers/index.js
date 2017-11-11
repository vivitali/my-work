import { combineReducers } from 'redux';
import loadApp from './loadApp';
import { routerReducer } from 'react-router-redux';

const myWorkApp = combineReducers({
    loadApp,
    routing: routerReducer
})

export default myWorkApp