import React from 'react';
import { connect } from 'react-redux';

import { HIDE_APPBAR, SHOW_APPBAR} from '../../actions/action-types';
import store from '../../store';

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
        store.dispatch({type: SHOW_APPBAR});
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
    },
    
    componentWillUnmount: function() {
        store.dispatch({type: HIDE_APPBAR});
    }
});

const mapStateToProps = function(store) {
    return {
        words: store.wordsStore.words,
        student: store.studentStore.student
    };
};

export default connect(mapStateToProps)(PronunciationContainer);
