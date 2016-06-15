import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';

import Nav from '../views/nav/';

const NavContainer = React.createClass({

    render: function() {
        return <Nav showNav={this.props.showNav} docked={!this.props.isMobile}/>;
    }
});

const mapStateToProps = function(store) {
    return {
        showNav: store.navState.showNav,
        isMobile: store.browser.lessThan.medium
    };
};

export default connect(mapStateToProps)(NavContainer);