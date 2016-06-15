import {combineReducers,reduceReducers} from 'redux';
import {responsiveStateReducer} from 'redux-responsive'

// Reducers
import NavReducer from './nav-reducer';

// Combine Reducers
var reducers = combineReducers({
        navState: NavReducer,
        browser: responsiveStateReducer
    });


export default reducers;