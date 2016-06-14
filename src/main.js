import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import injectTapEventPlugin from 'react-tap-event-plugin';

require('./components/Header/Header.css');
require('./components/App/App.css');
require('./components/Nav/Nav.css');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
ReactDOM.render(
    <div><App/></div>,
    document.getElementById('root')
);