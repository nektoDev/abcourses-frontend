import {GET_WORDS, SHOW_ANSWER} from '../actions/action-types';
import store from '../store';
import axios from 'axios';
import { getWordsSuccessAction, showAnswerAction } from '../actions/words-actions';

export const TASK_TYPE = {
    PRONUNCIATION: "pronunciation",
    VOCABULARY: "vocabulary"
};

export function getHomework(task, student) {
    axios.get('http://localhost:8085/word/homework/' + task + '/' + student)
        .then(response => {
            var homework = response.data;
            homework.words.map(function (w) {
                w.checked=false;
                w.showAnswer=false;
            });

            store.dispatch(getWordsSuccessAction(homework, task));

            return {
                type: GET_WORDS,
                homework,
                task
            };
        });
}
