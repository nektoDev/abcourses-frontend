import React from 'react';
import { connect } from 'react-redux';

import * as wordsApi from '../../api/word-api';
import WordsMixin from '../mixins/word-mixin'

import Vocabulary from '../views/vocabulary/index';

var VocabularyContainer = React.createClass({
    mixins: [WordsMixin],

    loadWords: function () {
        wordsApi.getWords(wordsApi.TASK_TYPE.VOCABULARY, this.props.params.student);
    },
    
    componentDidMount: function() {
        this.loadWords();
    },

    componentDidUpdate: function(prevProps) {
        let oldId = prevProps.params.student;
        let newId = this.props.params.student;
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
        words: store.wordsStore.words
    };
};

export default connect(mapStateToProps)(VocabularyContainer);
