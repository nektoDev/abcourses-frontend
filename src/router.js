import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

//Components
import App from './containers/App';
import Home from './containers/Home';
import StudentLayout from './containers/StudentLayout';
import CheckWordsLayout from './containers/CheckWordsLayout';
import CheckVocabulary from './containers/CheckVocabulary';
import CheckPronunciation from './containers/CheckPronunciation';
import Progress from './containers/Progress';

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Home}/>
      <Route path='/:student' component={StudentLayout}>
        <Route path='/:student/progress' component={Progress}/>
        <Route component={CheckWordsLayout}>
          <Route path='/:student/vocabulary' component={CheckVocabulary}/>
          <Route path='/:student/pronunciation' component={CheckPronunciation}/>
        </Route>
      </Route>
    </Route>
  </Router>
);
