import * as Action from '../actions/const';

const initialState = {
  students: [],
  student: {},
  studentStats: {},
  progress: {},
  progressChartDateValuesMap: {}
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
    case Action.API_GET_STUDENT_PROGRESS_CHART_SUCCESS: {
      return {...state, progressChartDateValuesMap: action.parameter.progressDateValuesMap};
    }
    case Action.API_GET_STUDENT_STATS_SUCCESS: {
      return {...state, studentStats: action.parameter};
    }
    default: {
      return state;
    }
  }
}
