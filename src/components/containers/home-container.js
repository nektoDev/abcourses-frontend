import React from 'react';
import { connect } from 'react-redux';
import store from '../../store'

//Actions
import { HIDE_NAV } from '../../actions/action-types'

//View
import Home from '../views/home';

const HomeContainer = React.createClass({

    componentDidMount: function() {
        store.dispatch({type: HIDE_NAV});
    },

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