import React from 'react';
import store from '../../store';

import Header from '../views/header';

const HeaderContainer = React.createClass({

    render: function() {
        return <Header handleTouchNavButton={handleTouchNavButton}/>;
    }
});

function handleTouchNavButton() {
    store.dispatch({type: "TOGGLE_NAV"});
}

export default HeaderContainer;