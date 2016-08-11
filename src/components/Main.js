import React from 'react';
import {green700} from '../../node_modules/material-ui/styles/colors';
import {lightBlue500} from '../../node_modules/material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavBarComponent from './NavBarComponent';
import {browserHistory} from 'react-router';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

require('normalize.css/normalize.css');
require('styles/App.css');

const {Grid} = require('react-flexgrid');
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: green700,
    primary1Color: lightBlue500
  },
  zIndex: {
    appBar: 1401
  }
});

injectTapEventPlugin();

class AppComponent extends React.Component {
  toggleNavBar() {
    this.setState({isNavBarOpen: !this.state.isNavBarOpen});
  }

  hideNavBar(self) {
    if (self) self.setState({isNavBarOpen: false});
  }

  handleTitleClick() {
    browserHistory.push('/')
  }

  componentDidMount() {
    browserHistory.listen(this.hideNavBar.bind(this, this));
  }

  state = {
    isNavBarOpen: false
  };

  render() {
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>

        <AppBar
          zDepth={2}
          className='app-bar'
          onTitleTouchTap={this.handleTitleClick}
          title={<span className='title'>{this.props.student ? this.props.student.name : 'English'}</span>}
          onLeftIconButtonTouchTap={this.toggleNavBar.bind(this)}
          iconElementRight={
            <div className={this.props.serviceStore.showAppBar ? 'app-bar-icons' : 'app-bar-icons hidden'}>
              <FontIcon color='rgba(255, 255, 255, 0.870588)' >
                <span className='words-count'>{this.props.words.filter((w) => (w.checked==false)).length}</span>
              </FontIcon>
              <IconButton onClick={this.props.actions.toggleAllAnswers}>
                <FontIcon className='material-icons' color='rgba(255, 255, 255, 0.870588)' >remove_red_eye</FontIcon>
              </IconButton>
              <IconButton onClick={this.props.actions.shuffle}>
                <FontIcon className='material-icons' color='rgba(255, 255, 255, 0.870588)'>shuffle</FontIcon>
              </IconButton>
              <IconButton onClick={this.props.actions.removeChecked}>
                <FontIcon className='material-icons' color='rgba(255, 255, 255, 0.870588)'>clear_all</FontIcon>
              </IconButton>
            </div>
          }
        />
        <NavBarComponent actions={this.actions} student={this.props.student} isNavBarOpen={this.state.isNavBarOpen} usefulLinks={this.props.usefulLinks}/>
        <Grid className='content markdown-body' style={{'paddingLeft': !this.props.isMobile && this.state.isNavBarOpen ? '266px' : '2rem'}}>
          {this.props.children}
          <div className='footer'></div>
        </Grid>
      </div>
    </MuiThemeProvider>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
