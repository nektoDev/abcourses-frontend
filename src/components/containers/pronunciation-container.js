import React from 'react';
import { connect } from 'react-redux';

import * as wordsApi from '../../api/word-api';

import Pronunciation from '../views/pronunciation';

const PronunciationContainer = React.createClass({

    componentDidMount: function() {
        wordsApi.getWords(wordsApi.TASK_TYPE.PRONUNCIATION, this.props.params.student);
    },


    render: function() {
        return <Pronunciation words={this.props.words} student={this.props.params.student}/>;
    }
});

const mapStateToProps = function(store) {
    return {
        words: store.wordsStore.words
    };
};

export default connect(mapStateToProps)(PronunciationContainer);
