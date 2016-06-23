import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//Layouts
import MainLayout from './components/layouts/main-layout';
import WordsLayout from './components/containers/words-layout-container';

//Components
import Home from './components/containers/home-container'
import PronunciationContainer from './components/containers/pronunciation-container'

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home}/>
            <Route path="/vocabulary">
                <Route component={WordsLayout}>
                    <Route path=":student" component={PronunciationContainer}/>
                </Route>
            </Route>
            <Route path="/pronunciation">
                <Route component={WordsLayout}>
                    <Route path=":student" component={PronunciationContainer}/>
                </Route>
            </Route>
        </Route>
    </Router>
);
