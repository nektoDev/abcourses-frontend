import * as Actions from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    progress: {}
};
const StudentReducer = function(state = initialState, action) {
    switch(action.type) {
        case Actions.GET_PROGRESS:
            return Object.assign({}, state, {
                progress: action.progress
            });
    }
    return state;
};

export default StudentReducer;
