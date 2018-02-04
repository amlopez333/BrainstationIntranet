import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import $ from 'jquery';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import './css/main.css';
import store from '../redux/store';

$(".button-collapse").sideNav();
const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>)
ReactDOM.render(
  <Provider store = {store}>
    {router}
  </Provider>, document.getElementById('root'));

