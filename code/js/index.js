import 'babel-polyfill';
import React from 'react';

import ReactDOM from "react-dom";


import {Provider} from 'react-redux'; 
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import WebPage from './components/WebPage';

const store = createStore(allReducers, applyMiddleware(thunk));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <WebPage/>
  </Provider>, 
  document.getElementById('fieldToShow')
);
 