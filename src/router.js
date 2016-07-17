import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//Layouts
import MainLayout from './components/layouts/main-layout';
import StudentContainer from './components/containers/student-layout-container';
import WordsLayout from './components/containers/words-layout-container';

//Components
import Home from './components/containers/home-container'
import PronunciationContainer from './components/containers/pronunciation-container'
import VocabularyContainer from './components/containers/vocabulary-container'
import ProgressContainer from './components/containers/progress-container'
import StudentHome from './components/views/student-home/index';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/">
                <IndexRoute component={Home}/>
                <Route path="/:student" component={StudentContainer}>

                    <Route component={WordsLayout}>
                        <Route path="/:student/vocabulary" component={VocabularyContainer}/>
                        <Route path="/:student/pronunciation" component={PronunciationContainer}/>
                        <Route path="/:student/progress" component={ProgressContainer}/>
                    </Route>
                </Route>
            </Route>
        </Route>
    </Router>
);
