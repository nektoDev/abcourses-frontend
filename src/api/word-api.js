import {GET_WORDS} from '../actions/action-types';
import store from '../store';
import { getPronunciationSuccessAction } from '../actions/words-actions';

var words = []

export const TASK_TYPE = {
    PRONUNCIATION: 0,
    VOCABULARY: 1
};

export function getWords(task, student) {
    for (var i = 0; i < 30; i++) {
        words.push({
            id: i,
            word: "accomodation",
            pronunciation: "disintegration",
            checked: "false",
        });
    }
    store.dispatch(getPronunciationSuccessAction(words));

    return {
        type: GET_WORDS,
        words
    };
}

