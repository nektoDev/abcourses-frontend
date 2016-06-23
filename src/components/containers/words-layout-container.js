import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';

import WordsLayout from '../layouts/words-layout/words-layout';
import { shuffleAction, removeCheckedAction } from '../../actions/words-actions';

function shuffleHandler() {
    store.dispatch(shuffleAction());
}

function removeCheckedHandler() {
    store.dispatch(removeCheckedAction());
}

const mapStateToProps = function(store) {
    return {
        words: store.wordsStore.words,
        shuffle: shuffleHandler,
        removeCheckedHandler: removeCheckedHandler,
    };
};

export default connect(mapStateToProps)(WordsLayout);
