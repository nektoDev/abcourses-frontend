import {GET_WORDS, SHOW_ANSWER} from '../actions/action-types';
import store from '../store';
import { getWordsSuccessAction, showAnswerAction } from '../actions/words-actions';


export const TASK_TYPE = {
    PRONUNCIATION: 0,
    VOCABULARY: 1
};

export function getWords(task, student) {
    var words = [];

    if (task == TASK_TYPE.PRONUNCIATION) {
        for (var i = 0; i < 30; i++) {
            words.push({
                id: i,
                word: "accomodation",
                pronunciation: "disintegration",
                translation: "дедушка купил машину",
                checked: false,
                isAnswerShow: false
            });
        }
        for (var i = 31; i < 40; i++) {
            words.push({
                id: i,
                word: "testiculus",
                pronunciation: "brainstorming invasion",
                translation: "Легкий",
                checked: false,
                isAnswerShow: false
            });
        }
    } else {
        for (var i = 100; i < 130; i++) {
            words.push({
                id: i,
                word: "accomodation",
                pronunciation: "disintegration",
                translation: "дедушка купил машину",
                checked: false,
                isAnswerShow: false
            });
        }
        for (var i = 131; i < 140; i++) {
            words.push({
                id: i,
                word: "testiculus",
                pronunciation: "brainstorming invasion",
                translation: "Легкий",
                checked: false,
                isAnswerShow: false
            });
        }
    }

    store.dispatch(getWordsSuccessAction(words));

    return {
        type: GET_WORDS,
        words
    };
}
