import React from 'react';
import { connect } from 'react-redux';

import * as wordsApi from '../../api/word-api';
import WordsMixin from '../mixins/word-mixin'

import Pronunciation from '../views/pronunciation/index';

var PronunciationContainer = React.createClass({
    mixins: [WordsMixin],

    loadWords: function () {
        if (this.props.student.id)
            wordsApi.getHomework(wordsApi.TASK_TYPE.PRONUNCIATION, this.props.student.id);
    },

    componentDidMount: function() {
        this.loadWords();
    },

    componentDidUpdate: function(prevProps) {
        let oldId = prevProps.student.id;
        let newId = this.props.student.id;
        if (newId !== oldId)
            this.loadWords();
    },

    render: function() {
        return <Pronunciation words={this.props.words}
                              showAnswerHandler={this.showAnswer}
                              checkWordHandler={this.checkWordHandler}
                              student={this.props.student}
        />;
    }
});

const mapStateToProps = function(store) {
    return {
        words: store.wordsStore.words,
        student: store.studentStore.student
    };
};

export default connect(mapStateToProps)(PronunciationContainer);
