import React from 'react';
import ReactDOM from 'react-dom';

// Provider is going to keep track of that STORE which is that global state
// And that allows us to access that store from anywhere inside of the app
// We don't have to be inside in a parent component or in a child compoennt 
// we can access that state from anywhere

import { Provider } from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import { thunk } from 'redux-thunk';
import reducers from './reducers';

import './index.css'

import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);