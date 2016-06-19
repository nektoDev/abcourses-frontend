import * as Actions from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    words: []
};
const WordsReducer = function(state = initialState, action) {
    switch(action.type) {
        case Actions.GET_WORDS:
            return Object.assign({}, state, {
                words: action.words
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
