import * as Actions from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    words: [],
    taskType: null
};
const WordsReducer = function(state = initialState, action) {
    switch(action.type) {
        case Actions.GET_WORDS:
            return Object.assign({}, state, {
                words: action.homework.words,
                taskType: action.task
            });
        case Actions.CLEAR_WORDS:
            return Object.assign({}, state, {
                words: []
            });

        case Actions.SHOW_ANSWER:
            var newWord = action.word;
            newWord.checked = true;

            return Object.assign({}, state, {
                words: replaceWord(state.words, newWord, action.word.wordId)
            });

        case Actions.TOGGLE_CHECK:
            var newWord = action.word;
            newWord.checked = !action.word.checked;

            return Object.assign({}, state, {
                words: replaceWord(state.words, newWord, action.word.wordId)
            });
        case Actions.SHUFFLE:
            return Object.assign({}, state, {
                words: _.shuffle(state.words)
            });
        case Actions.REMOVE_CHECKED:
            return Object.assign({}, state, {
                words: _.filter(state.words, function (w) {
                    return !w.checked;
                })
            });
        case Actions.TOGGLE_ALL_ANSWERS:
            var newWords = [];
            var show = _.findIndex(state.words, ['checked', false]) != -1;

            _.forEach(state.words, function (w) {
                w.checked = show;
                newWords.push(w);
            });
            
            return Object.assign({}, state, {
                words: newWords
            });
    }
    return state;
};

function replaceWord(words, newWord, id) {
    var newWords = words.slice();

    let index = _.findIndex(newWords, function(w) {
        return w.wordId === id;
    });

    newWords[index] = newWord;

    return newWords;
}

export default WordsReducer;
