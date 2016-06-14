import { combineReducers } from 'redux';

// Reducers
import NavReducer from './nav-reducer';

// Combine Reducers
var reducers = combineReducers({
    navState: NavReducer
});

export default reducers;