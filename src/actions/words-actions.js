import {GET_WORDS, SHOW_ANSWER, TOGGLE_ANSWER, TOGGLE_CHECK, SHUFFLE, REMOVE_CHECKED} from "./action-types";

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

export function toggleCheckStateAction(word) {
    return {
        type: TOGGLE_CHECK,
        word
    }
}

export function shuffleAction() {
    return {
        type: SHUFFLE
    }
}

export function removeCheckedAction() {
    return {
        type: REMOVE_CHECKED
    }
}

