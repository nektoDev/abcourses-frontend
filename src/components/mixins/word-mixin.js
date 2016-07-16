import store from '../../store';
import {toggleCheckStateAction, shuffleAction,showAnswerAction, removeCheckedAction, toggleAllAnswersAction} from '../../actions/words-actions'

var WordMixin = {

    showAnswerHandler: function (e, word) {
        store.dispatch(showAnswerAction(word));
    },
    
    toggleAnswerHandler: function (word) {
        store.dispatch(toggleCheckStateAction(word));
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