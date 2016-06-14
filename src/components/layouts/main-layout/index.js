import React, {Component} from 'react';
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

export default function (props) {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <HeaderContainer/>
                <NavContainer/>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </MuiThemeProvider>
    );
}

