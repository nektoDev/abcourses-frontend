import React from 'react';
import { connect } from 'react-redux';

import Nav from '../views/nav/';

const NavContainer = React.createClass({
    render: function() {
        return <Nav showNav={this.props.showNav}/>;
    }
});

const mapStateToProps = function(store) {
    return {
        showNav: store.navState.showNav
    };
};

export default connect(mapStateToProps)(NavContainer);