import React from 'react';
import { connect } from 'react-redux';

import * as wordsApi from '../../api/word-api';
import WordsMixin from '../mixins/word-mixin'

import Vocabulary from '../views/vocabulary/index';

var VocabularyContainer = React.createClass({
    mixins: [WordsMixin],

    loadWords: function () {
        if (this.props.student.id)
            wordsApi.getWords(wordsApi.TASK_TYPE.VOCABULARY, this.props.student.id);
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
        return <Vocabulary words={this.props.words} 
                           showAnswerHandler={this.showAnswer}
                           checkWordHandler={this.checkWordHandler}
        />;
    }
});

const mapStateToProps = function(store) {
    return {
        words: store.wordsStore.words,
        student: store.studentStore.student
    };
};

export default connect(mapStateToProps)(VocabularyContainer);
