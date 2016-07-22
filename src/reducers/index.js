import {combineReducers,reduceReducers} from 'redux';
import {responsiveStateReducer} from 'redux-responsive'

// Reducers
import ServiceReducer from './service-reducer';
import WordsReducer from './words-reducer';
import StudentReducer from './student-reducer';

// Combine Reducers
var reducers = combineReducers({
        serviceStore: ServiceReducer,
        browser: responsiveStateReducer,
        wordsStore: WordsReducer,
        studentStore: StudentReducer,
    });

export default reducers;