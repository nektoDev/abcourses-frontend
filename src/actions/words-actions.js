import {GET_WORDS} from "./action-types";

export function getPronunciationSuccessAction(words) {
    return {
        type: GET_WORDS,
        words
    }
}