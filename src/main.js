import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import store from './store';
import router from './router';

//CSS
require('./components/layouts/main-layout/main-layout.css');
require('./components/views/Header/header.css');
require('./components/views/nav/nav.css');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);