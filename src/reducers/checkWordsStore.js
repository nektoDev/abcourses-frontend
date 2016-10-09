import * as Action from '../actions/const';
import _ from 'lodash';

const initialState = {
  words: []
}

const CheckWordsReducer = function (state = initialState, action) {

  switch (action.type) {
    case Action.API_GET_CHECK_WORDS_SUCCESS: {
     return {...state, words: action.words, initialWords: _.cloneDeep(action.words) };
     }

    case Action.CLEAR_WORDS: {
      return {...state, words: []}
    }

    case Action.SHOW_ANSWER: {
      var newWord = action.word;
      newWord.checked = true;
      return {...state, words: replaceWord(state.words, newWord, action.word.id)};
    }

    case Action.TOGGLE_ANSWER: {
      var newWord = action.word;
      newWord.checked = !action.word.checked;
      return{...state, words: replaceWord(state.words, newWord, action.word.id)};
    }

    case Action.SHUFFLE: {
      return {...state, words: _.shuffle(state.words)};
      }

    case Action.REMOVE_CHECKED:{
      return {...state, words: _.filter(state.words, (w) =>(!w.checked))}
    }

    case Action.TOGGLE_ALL_ANSWERS: {
      var newWords = [];
      var show = _.findIndex(state.words, ['checked', false]) != -1;

      _.forEach(state.words, function (w) {
        w.checked = show;
        newWords.push(w);
      });

      return {...state, words: newWords}
    }

    case Action.RETRY:{
      return {...state, words: _.cloneDeep(state.initialWords)}
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

function replaceWord(words, newWord, id) {
  var newWords = _.cloneDeep(words);

  let index = _.findIndex(newWords, (w) => (w.id === id));
  newWords[index] = newWord;
  return newWords;
}

export default CheckWordsReducer;
