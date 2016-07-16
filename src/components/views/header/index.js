import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {browserHistory} from 'react-router';

const styles = {
    title: {
        cursor: 'pointer',
    },
    hidden: {
        display: 'none'
    },
    wordsCount: {
        fontSize: 18,
        verticalAlign: "text-top",
        padding: 12
    }
};

var Header = React.createClass({
    handleTitleClick: function () {
        browserHistory.push('/')
    },

    render: function() {
        return (
            <div className="header">
                <AppBar

                    ref="navBar"
                    zDepth={2}
                    className="app-bar"
                    title={<span style={styles.title}>{this.props.student ? this.props.student.name : 'English'}</span>}
                    onTitleTouchTap={this.handleTitleClick}
                    onLeftIconButtonTouchTap={this.props.handleTouchNavButton.bind(null, null)}
                    iconElementRight={
                    <div className="app-bar-icons" style={this.props.showAppBar ? null : styles.hidden}>
                        <FontIcon color="rgba(255, 255, 255, 0.870588)" >
                            <span style={styles.wordsCount}>{this.props.words.filter(function(w){return w.checked==false}).length}</span>
                        </FontIcon>
                        <IconButton onClick={this.props.toggleAllAnswersHandler}>
                             <FontIcon className="material-icons" color="rgba(255, 255, 255, 0.870588)" >remove_red_eye</FontIcon>
                        </IconButton>
                        <IconButton onClick={this.props.shuffleHandler}>
                            <FontIcon className="material-icons" color="rgba(255, 255, 255, 0.870588)">shuffle</FontIcon>
                        </IconButton>
                        <IconButton onClick={this.props.removeCheckedHandler}>
                             <FontIcon className="material-icons" color="rgba(255, 255, 255, 0.870588)">clear_all</FontIcon>
                        </IconButton>

                    </div>
                    }
                />
            </div>
        );
    }
});

export default Header;