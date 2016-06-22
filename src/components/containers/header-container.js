import React from 'react';
import store from '../../store';

//Actions
import { TOGGLE_NAV, SHUFFLE } from '../../actions/action-types'

//View
import Header from '../views/header';

const HeaderContainer = React.createClass({

    render: function() {
        return <Header handleTouchNavButton={handleTouchNavButton} shuffleHandler={shuffleHandler}/>;
    }
});

function handleTouchNavButton() {
    store.dispatch({type: TOGGLE_NAV});
}

function shuffleHandler() {
    store.dispatch({type: SHUFFLE});
}

export default HeaderContainer;