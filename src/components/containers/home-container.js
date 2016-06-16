import React from 'react';
import { connect } from 'react-redux';

//Actions

//View
import Home from '../views/home';

const HomeContainer = React.createClass({

    render: function() {
        return <Home navigation={this.props.navigation}/>;
    }
});

const mapStateToProps = function(store) {
    return {
        navigation: store.navState.navigation
    };
};

export default connect(mapStateToProps)(HomeContainer);