import {GET_WORDS, SHOW_ANSWER} from '../actions/action-types';
import store from '../store';
import axios from 'axios';
import { getWordsSuccessAction, showAnswerAction } from '../actions/words-actions';

export const TASK_TYPE = {
    PRONUNCIATION: "pronunciation",
    VOCABULARY: "vocabulary"
};

export function getHomework(task, student) {
    axios.get('http://localhost:8080/word/homework/' + task + '/' + student)
        .then(response => {
            var homework = response.data;
            store.dispatch(getWordsSuccessAction(homework, task));

            return {
                type: GET_WORDS,
                homework,
                task
            };
        });
}
