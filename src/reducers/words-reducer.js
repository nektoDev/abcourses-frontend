import * as Actions from '../actions/action-types'

const initialState = {
    words: []
};
const WordsReducer = function(state = initialState, action) {
    switch(action.type) {
        case Actions.GET_WORDS:
            return Object.assign({}, state, {
                words: action.words
            });
    }
    return state;
};

export default WordsReducer;
