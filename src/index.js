import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
//React-redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import EmpReducers from './redux/reducers/EmpReducers'
import thunk from 'redux-thunk';

var store = createStore(EmpReducers, applyMiddleware(thunk));

//console.log(store.getState());
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

