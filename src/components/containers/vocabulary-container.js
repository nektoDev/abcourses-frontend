import React from 'react';
import { connect } from 'react-redux';

import * as wordsApi from '../../api/word-api';
import WordsMixin from '../mixins/word-mixin'

import Vocabulary from '../views/vocabulary/index';

var VocabularyContainer = React.createClass({
    mixins: [WordsMixin],
    
    componentDidMount: function() {
        wordsApi.getWords(wordsApi.TASK_TYPE.VOCABULARY, this.props.params.student);
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
