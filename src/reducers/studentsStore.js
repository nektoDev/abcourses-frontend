import * as Action from '../actions/const';

const initialState = {
  students: [],
  student: {},
  progress: {}
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case Action.API_LIST_STUDENTS_SUCCESS: {
      return {...state, students: action.parameter};
    }
    case Action.API_GET_STUDENT_SUCCESS: {
      return {...state, student: action.parameter};
    }
    case Action.API_GET_STUDENT_PROGRESS_SUCCESS: {
      return {...state, progress: action.parameter};
    }
    default: {
      return state;
    }
  }
}
