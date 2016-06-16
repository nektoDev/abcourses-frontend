import React from 'react';
import { connect } from 'react-redux';

//Actions

//View
import Nav from '../views/nav/';

const NavContainer = React.createClass({

    render: function() {
        return <Nav showNav={this.props.showNav} navigation={this.props.navigation} docked={!this.props.isMobile}/>;
    }
});

const mapStateToProps = function(store) {
    return {
        showNav: store.navState.showNav,
        isMobile: store.browser.lessThan.medium,
        navigation: store.navState.navigation
    };
};

export default connect(mapStateToProps)(NavContainer);