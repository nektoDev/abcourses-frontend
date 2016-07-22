import React from 'react';
import { connect } from 'react-redux';

import Nav from '../views/Nav/index';
import {getUsefulLinks} from "../../api/service-api";

const NavContainer = React.createClass({

    componentWillMount: function () {
        getUsefulLinks();
    },

    render: function() {
        return <Nav {...this.props} showNav={this.props.showNav} docked={!this.props.isMobile}/>;
    }
});

const mapStateToProps = function(store) {
    return {
        usefulLinks: store.serviceStore.usefulLinks,
        student: store.studentStore.student,
        showNav: store.serviceStore.showNav,
        isMobile: store.browser.lessThan.medium,
    };
};

export default connect(mapStateToProps)(NavContainer);