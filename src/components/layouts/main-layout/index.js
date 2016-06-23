import React, {Component} from 'react';
import { connect } from 'react-redux';

import {green700, lightBlue500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderContainer from '../../containers/header-container';
import NavContainer from '../../containers/nav-container';
const {Grid} = require('react-flexgrid');

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
        return {"paddingLeft" : !this.props.isMobile && this.props.showNav ? "266px" : "2rem",
        "margin" : "auto", paddingRight: "2rem"}

    },

    render: function () {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <HeaderContainer/>
                    <NavContainer/>
                    <Grid className="content markdown-body" style={this.styles()}>
                        {this.props.children}
                        <div className="footer"></div>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
});


const mapStateToProps = function(store) {
    return {
        showNav: store.navState.showNav,
        isMobile: store.browser.lessThan.medium
    };
};


export default connect(mapStateToProps)(MainLayout);
