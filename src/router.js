import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//Layouts
import MainLayout from './components/layouts/main-layout';

//Components
import Home from './components/containers/home-container'
import PronunciationContainer from './components/containers/pronunciation-container'
import Div from './components/div'

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home}/>
            <Route path="/vocabulary" component={Div}>
                <Route path=":student" component={Div}/>
            </Route>
            <Route path="/pronunciation/:student" component={PronunciationContainer}>
            </Route>
        </Route>
    </Router>
);
