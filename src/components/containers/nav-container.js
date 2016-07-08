import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';

//Actions
import {HIDE_NAV} from '../../actions/action-types';

//View
import Nav from '../views/nav/';

const NavContainer = React.createClass({

    render: function() {
        return <Nav {...this.props} showNav={this.props.showNav} navigation={this.props.navigation} docked={!this.props.isMobile}/>;
    }
});

const mapStateToProps = function(store) {
    return {
        student: store.studentStore.student,
        showNav: store.navState.showNav,
        isMobile: store.browser.lessThan.medium,
        navigation: store.navState.navigation
    };
};

export default connect(mapStateToProps)(NavContainer);