import store from '../../store';
import {toggleAnswerAction, toggleCheckStateAction, shuffleAction, removeCheckedAction, toggleAllAnswersAction} from '../../actions/words-actions'

var WordMixin = {

    checkWordHandler: function (word) {
        store.dispatch(toggleCheckStateAction(word))
    },

    showAnswer: function (word) {
        store.dispatch(toggleAnswerAction(word));
    },


    shuffleHandler: function () {
        store.dispatch(shuffleAction());
    },

    removeCheckedHandler: function () {
        store.dispatch(removeCheckedAction());
    },

    toggleAllAnswersHandler: function () {
        store.dispatch(toggleAllAnswersAction());
    }
};

export default WordMixin;