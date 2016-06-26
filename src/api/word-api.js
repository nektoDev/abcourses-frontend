import {GET_WORDS, SHOW_ANSWER} from '../actions/action-types';
import store from '../store';
import axios from 'axios';
import { getWordsSuccessAction, showAnswerAction } from '../actions/words-actions';

export const TASK_TYPE = {
    PRONUNCIATION: "pronunciation",
    VOCABULARY: "vocabulary"
};

export function getWords(task, student) {
    axios.get('http://localhost:8080/word/' + task + '/' + student)
        .then(response => {
            var words = response.data;
            store.dispatch(getWordsSuccessAction(words, task, student));

            return {
                type: GET_WORDS,
                words,
                task,
                student
            };
        });
}
