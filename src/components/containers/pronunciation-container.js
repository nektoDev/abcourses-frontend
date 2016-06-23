import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';

import * as wordsApi from '../../api/word-api';
import {toggleAnswerAction, toggleCheckStateAction} from '../../actions/words-actions'

import Pronunciation from '../views/pronunciation/index';

const PronunciationContainer = React.createClass({

    componentDidMount: function() {
        wordsApi.getWords(wordsApi.TASK_TYPE.PRONUNCIATION, this.props.params.student);
    },


    render: function() {
        return <Pronunciation words={this.props.words}
                              showAnswerHandler={showAnswer}
                              checkWordHandler={checkWordHandler}
        />;
    }
});

function checkWordHandler(word) {
    store.dispatch(toggleCheckStateAction(word))
}

function showAnswer(word) {
    store.dispatch(toggleAnswerAction(word));
}

const mapStateToProps = function(store) {
    return {
        words: store.wordsStore.words
    };
};

export default connect(mapStateToProps)(PronunciationContainer);
