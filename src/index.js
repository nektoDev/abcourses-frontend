import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import router from './router';
require('react-flexgrid/lib/flexgrid.css');
const store = configureStore();

render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);
