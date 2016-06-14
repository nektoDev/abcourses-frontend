import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//Layouts
import MainLayout from './components/layouts/main-layout';

//Components
import Home from './components/views/home'

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home}/>
        </Route>
    </Router>
);
