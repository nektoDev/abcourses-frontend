import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//Layouts
import MainLayout from './components/layouts/main-layout';

//Components
import Home from './components/home'
import Div from './components/div'
import Aiy from './components/aiy'

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home}/>
            <Route path="/vocabulary" component={Div}>
                <Route path=":student" component={Div}/>
            </Route>
            <Route path="/pronunciation" component={Div}>
                <Route path=":student" component={Div}/>
            </Route>
        </Route>
    </Router>
);
