import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';

import WordsLayout from '../layouts/words-layout/words-layout';
import {  removeCheckedAction, shuffleAction } from '../../actions/words-actions';
import { getWords, TASK_TYPE } from '../../api/word-api';

function retryHandler(taskType, student) {
    getWords(taskType, student.id);
    store.dispatch(shuffleAction());
}

function removeCheckedHandler() {
    store.dispatch(removeCheckedAction());
}
     
const mapStateToProps = function(store) {
    return {
        words: store.wordsStore.words,
        taskType: store.wordsStore.taskType,
        student: store.studentStore.student,
        retryHandler: retryHandler,
        removeCheckedHandler: removeCheckedHandler,
    };
};

export default connect(mapStateToProps)(WordsLayout);
