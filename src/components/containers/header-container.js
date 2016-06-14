import React from 'react';

import Header from '../views/header';

const HeaderContainer = React.createClass({

    render: function() {
        return <Header handleTouchNavButton={test}/>;
    }
});

function test() {
    alert(1312);
}

export default HeaderContainer;