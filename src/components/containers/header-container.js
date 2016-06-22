import React from 'react';
import store from '../../store';

//Actions
import { TOGGLE_NAV, SHUFFLE } from '../../actions/action-types'
import {shuffleAction, removeCheckedAction, toggleAllAnswersAction} from '../../actions/words-actions'

//View
import Header from '../views/header';

const HeaderContainer = React.createClass({

    render: function() {
        return <Header handleTouchNavButton={handleTouchNavButton}
                       shuffleHandler={shuffleHandler}
                       removeCheckedHandler={removeCheckedHandler}
                       toggleAllAnswersHandler={toggleAllAnswersHandler}
        />;
    }
});

function handleTouchNavButton() {
    store.dispatch({type: TOGGLE_NAV});
}

function shuffleHandler() {
    store.dispatch(shuffleAction());
}

function removeCheckedHandler() {
    store.dispatch(removeCheckedAction());
}

function toggleAllAnswersHandler() {
    store.dispatch(toggleAllAnswersAction());
}

export default HeaderContainer;