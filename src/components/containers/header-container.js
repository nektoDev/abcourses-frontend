import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';

//Actions
import { TOGGLE_NAV, SHUFFLE } from '../../actions/action-types'

//View
import Header from '../views/header';

import WordsMixin from '../mixins/word-mixin'

const HeaderContainer = React.createClass({
    mixins: [WordsMixin],

    render: function() {
        return <Header handleTouchNavButton={handleTouchNavButton}
                       shuffleHandler={this.shuffleHandler}
                       removeCheckedHandler={this.removeCheckedHandler}
                       toggleAllAnswersHandler={this.toggleAllAnswersHandler}
                       {...this.props}
        />;
    }
});

function handleTouchNavButton() {
    store.dispatch({type: TOGGLE_NAV});
}

const mapStateToProps = function(store) {
    return {
        showAppBar: store.navState.showAppBar,
        student: store.studentStore.student,
        words: store.wordsStore.words
    };
};

export default connect(mapStateToProps)(HeaderContainer);