import React, {Component} from 'react';
import { connect } from 'react-redux';

import {green700, lightBlue500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderContainer from '../../containers/header-container';
import NavContainer from '../../containers/nav-container';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: green700,
        primary1Color: lightBlue500,
    },
    zIndex: {
        appBar: 1401,
    }
});



var MainLayout = React.createClass({

    styles: function() {
        return {"padding-left" : this.props.showNav ? "256px" : "0px"}
    },

    render: function () {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <HeaderContainer/>
                    <NavContainer/>
                    <div className="content" style={this.styles()}>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
});


const mapStateToProps = function(store) {
    return {
        showNav: store.navState.showNav
    };
};


export default connect(mapStateToProps)(MainLayout);
