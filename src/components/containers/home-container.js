import React from 'react';
import { connect } from 'react-redux';
import store from '../../store'

//Actions
import { HIDE_NAV } from '../../actions/action-types'

//View
import Home from '../views/home/index';
import {getUsefulLinks} from "../../api/service-api";

const HomeContainer = React.createClass({

    componentDidMount: function() {
        store.dispatch({type: HIDE_NAV});
    },

    componentWillMount: function () {
        getUsefulLinks();
    },

    render: function() {
        return <Home {...this.props}/>;
    }
});

const mapStateToProps = function(store) {
    return {
        usefulLinks: store.serviceStore.usefulLinks,
    };
};

export default connect(mapStateToProps)(HomeContainer);