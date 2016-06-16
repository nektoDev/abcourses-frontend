import {combineReducers,reduceReducers} from 'redux';
import {responsiveStateReducer} from 'redux-responsive'

// Reducers
import NavReducer from './nav-reducer';
import WordsReducer from './words-reducer';

// Combine Reducers
var reducers = combineReducers({
        navState: NavReducer,
        browser: responsiveStateReducer,
        wordsStore: WordsReducer
    });


export default reducers;