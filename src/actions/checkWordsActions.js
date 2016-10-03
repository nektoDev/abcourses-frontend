import {
  API_GET_CHECK_WORDS_SUCCESS,
  SHOW_ANSWER,
  TOGGLE_ANSWER,
  SHUFFLE,
  REMOVE_CHECKED,
  TOGGLE_ALL_ANSWERS,
  RETRY
} from './const';
import axios from 'axios';
let config = require('config');
var jsonrpc = require('jsonrpc-lite');

function getCheckWordsSuccessActionCreator(words) {
  return {
    type: API_GET_CHECK_WORDS_SUCCESS,
    words
  }
}

function showAnswerActionCreator(word) {
  return {
    type: SHOW_ANSWER,
    word
  }
}

function toggleAnswerStateActionCreator(word) {
  return {
    type: TOGGLE_ANSWER,
    word
  }
}

export const TASK_TYPE = {
  PRONUNCIATION: 'pronunciation',
  VOCABULARY: 'vocabulary'
};



export function getCheckWords(dispatch) {
  return (task, student) => {
    axios.post(config.default.apiHost +'/homework', jsonrpc.request('1', 'getStudentHomework', [student]))
      .then(response => {
        let homework = jsonrpc.parseObject(response.data).payload.result;


        let action;
        if (task == TASK_TYPE.PRONUNCIATION) {
          homework.pronunciation.map(function (w) {
            w.checked = false;
          });
          action = getCheckWordsSuccessActionCreator(homework.pronunciation);
        } else {
          homework.vocabulary.map(function (w) {
            w.checked = false;
          });
          action = getCheckWordsSuccessActionCreator(homework.vocabulary);

        }


        dispatch(action);

        return action;
      })
  };
}

export function showAnswerAction(dispatch) {
  return (word) => {
    var action = showAnswerActionCreator(word);
    dispatch(action);

    return action
  }
}

export function toggleAnswerStateAction(dispatch) {
  return (word) => {
    var action = toggleAnswerStateActionCreator(word);
    dispatch(action);

    return action
  }
}

export function toggleAllAnswersAction() {
  return {
    type: TOGGLE_ALL_ANSWERS
  }
}

export function shuffleAction() {
  return {
    type: SHUFFLE
  }
}

export function removeCheckedAction() {
  return {
    type: REMOVE_CHECKED
  }
}

export function retryAction() {
  return {
    type: RETRY
  }
}



