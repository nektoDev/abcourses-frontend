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
    if (task == TASK_TYPE.PRONUNCIATION) {
      axios.post(config.default.apiHost + '/homework', jsonrpc.request('1', 'getPronunciation', [student]))
        .then(response => {
          let homework = jsonrpc.parseObject(response.data).payload.result;
          homework.words.map(function (w) {
            w.checked = false;
          });
          let action = getCheckWordsSuccessActionCreator(homework.words);
          dispatch(action);
          return action;
        })
    } else {
      axios.post(config.default.apiHost + '/homework', jsonrpc.request('1', 'getVocabulary', [student]))
        .then(response => {
          let homework = jsonrpc.parseObject(response.data).payload.result;
          homework.words.map(function (w) {
            w.checked = false;
          });
          let action = getCheckWordsSuccessActionCreator(homework.words);
          dispatch(action);
          return action;
        })
    }
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



