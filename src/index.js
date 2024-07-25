// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRoutes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);
