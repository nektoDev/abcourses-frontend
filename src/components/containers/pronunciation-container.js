import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';

import * as wordsApi from '../../api/word-api';
import {toggleAnswerAction, toggleCheckStateAction, shuffleAction} from '../../actions/words-actions'

import Pronunciation from '../views/pronunciation/index';

const PronunciationContainer = React.createClass({

    componentDidMount: function() {
        wordsApi.getWords(wordsApi.TASK_TYPE.PRONUNCIATION, this.props.params.student);
    },


    render: function() {
        return <Pronunciation words={this.props.words}
                              student={this.props.params.student}
                              showAnswerHandler={showAnswer}
                              checkWordHandler={checkWordHandler}
                              shuffle={shuffleHandler}
        />;
    }
});

function checkWordHandler(word) {
    store.dispatch(toggleCheckStateAction(word))
}

function showAnswer(word) {
    store.dispatch(toggleAnswerAction(word));
}

function shuffleHandler() {
    store.dispatch(shuffleAction());
}

const mapStateToProps = function(store) {
    return {
        words: store.wordsStore.words
    };
};

export default connect(mapStateToProps)(PronunciationContainer);
