import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';

import configureStore from './configureStore';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
<Provider store = { store } >
<ConnectedRouter history={history}>
<App />
</ConnectedRouter>
</Provider>,
document.getElementById('root'));
registerServiceWorker();