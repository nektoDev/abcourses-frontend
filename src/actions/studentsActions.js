import axios from 'axios';
import {API_LIST_STUDENTS_SUCCESS, API_GET_STUDENT_SUCCESS, API_GET_STUDENT_PROGRESS_SUCCESS} from './const';
let config = require('config');
var jsonrpc = require('jsonrpc-lite');

function listStudentsCreator(parameter) {
  return {type: API_LIST_STUDENTS_SUCCESS, parameter};
}

function getStudentCreator(parameter) {
  return {type: API_GET_STUDENT_SUCCESS, parameter};
}

function getStudentProgressActionCreator(parameter) {
  return {type: API_GET_STUDENT_PROGRESS_SUCCESS, parameter};
}

export function listStudents(dispatch) {

  return () => {
    axios.post(config.default.apiHost + 'student', jsonrpc.request('1', 'list'))
      .then(response => {
        var action = listStudentsCreator(jsonrpc.parseObject(response.data).payload.result);
        dispatch(action);
        return action;
      });
  }
}

export function getStudent(dispatch) {

  return (id) => {
    axios.get(config.default.apiHost + 'student/' + id)
      .then(response => {
        var action = getStudentCreator(response.data);
        dispatch(action);
        return action;
      });
  }
}

export function getStudentProgress(dispatch) {

  return (id) => {
    axios.get(config.default.apiHost + 'student/progress/' + id)
      .then(response => {
        var action = getStudentProgressActionCreator(response.data);
        dispatch(action);
        return action;
      });
  }
}
