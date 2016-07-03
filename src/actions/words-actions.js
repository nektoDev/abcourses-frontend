import {GET_WORDS, SHOW_ANSWER, TOGGLE_ANSWER, TOGGLE_CHECK, SHUFFLE, REMOVE_CHECKED, TOGGLE_ALL_ANSWERS} from "./action-types";

export function getWordsSuccessAction(homework, task, student) {
    return {
        type: GET_WORDS,
        homework,
        task
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

export function toggleAllAnswersAction() {
    return {
        type: TOGGLE_ALL_ANSWERS
    }
}

