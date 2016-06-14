import React, {Component} from 'react';
import {green700, lightBlue500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: green700,
        primary1Color: lightBlue500,
    },
    zIndex: {
        appBar: 1401,
    }
});

var App = React.createClass({
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header/>
                    <Nav/>
                    <div className="content">
                        <h1>Hello</h1>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
});

export default App;