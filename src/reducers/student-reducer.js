import * as Actions from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    studentList: [],
    student: {}
};
const StudentReducer = function(state = initialState, action) {
    switch(action.type) {
        case Actions.GET_STUDENT:
            return Object.assign({}, state, {
                student: action.student
            });
    }
    return state;
};

export default StudentReducer;
