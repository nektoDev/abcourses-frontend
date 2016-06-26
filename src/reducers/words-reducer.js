import * as Actions from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    words: [],
    student: '',
    taskType: null
};
const WordsReducer = function(state = initialState, action) {
    switch(action.type) {
        case Actions.GET_WORDS:
            return Object.assign({}, state, {
                words: action.words,
                student: action.student,
                taskType: action.task
            });

        case Actions.SHOW_ANSWER:
            var newWord = action.word;
            newWord.isAnswerShow = true;

            return Object.assign({}, state, {
                words: replaceWord(state.words, newWord, action.word.id)
            });

        case Actions.TOGGLE_ANSWER:
            var newWord = action.word;
            newWord.isAnswerShow = !action.word.isAnswerShow;

            return Object.assign({}, state, {
                words: replaceWord(state.words, newWord, action.word.id)
            });
        case Actions.TOGGLE_CHECK:
            var newWord = action.word;
            newWord.checked = !action.word.checked;

            return Object.assign({}, state, {
                words: replaceWord(state.words, newWord, action.word.id)
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
            console.log();
            var newWords = [];
            var show = _.findIndex(state.words, ['isAnswerShow', false]) != -1;

            _.forEach(state.words, function (w) {
                w.isAnswerShow = show;
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
        return w.id === id;
    });

    newWords[index] = newWord;

    return newWords;
}

export default WordsReducer;
