import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//Layouts
import MainLayout from './components/layouts/main-layout';
import StudentLayout from './components/containers/student-layout-container';
import WordsLayout from './components/containers/words-layout-container';

//Components
import Home from './components/containers/home-container'
import PronunciationContainer from './components/containers/pronunciation-container'
import VocabularyContainer from './components/containers/vocabulary-container'

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home}/>
            <Route path="/test" component={Home}/>

            <Route path="/:student" component={StudentLayout}>
                <Route path="/" component={Home}/>
                <Route component={WordsLayout}>
                    <Route path="/:student/vocabulary" component={VocabularyContainer}/>
                    <Route path="/:student/pronunciation" component={PronunciationContainer}/>
                </Route>
            </Route>
        </Route>
    </Router>
);
