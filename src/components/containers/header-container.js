import React from 'react';
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
        />;
    }
});

function handleTouchNavButton() {
    store.dispatch({type: TOGGLE_NAV});
}

export default HeaderContainer;