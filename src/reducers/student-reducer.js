import * as Actions from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    studentList: [],
    student: {},
    progress: []
};
const StudentReducer = function(state = initialState, action) {
    switch(action.type) {
        case Actions.GET_STUDENT:
            return Object.assign({}, state, {
                student: action.student
            });
        case Actions.GET_STUDENT_PROGRESS:
            return Object.assign({}, state, {
                progress: action.progress
            });
    }
    return state;
};

export default StudentReducer;
