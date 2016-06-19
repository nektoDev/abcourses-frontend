import {GET_WORDS, SHOW_ANSWER, TOGGLE_ANSWER} from "./action-types";

export function getPronunciationSuccessAction(words) {
    return {
        type: GET_WORDS,
        words
    }
}

export function showAnswerAction(word) {
    return {
        type: SHOW_ANSWER,
        word
    }
}

export function toggleAnswerAction(word) {
    return {
        type: TOGGLE_ANSWER,
        word
    }
}