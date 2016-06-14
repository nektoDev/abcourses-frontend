import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <AppBar

                    ref="navBar"
                    zDepth={2}
                    className="app-bar"
                    title="Title"
                    onLeftIconButtonTouchTap={this.props.handleTouchNavButton.bind(null, null)}
                    iconElementRight={
                    <div className="app-bar-icons">
                        <IconButton tooltip="shuffle">
                            <FontIcon className="material-icons" color="rgba(255, 255, 255, 0.870588)">shuffle</FontIcon>
                        </IconButton>
                        <IconButton tooltip="show all">
                             <FontIcon className="material-icons" color="rgba(255, 255, 255, 0.870588)">remove_red_eye</FontIcon>
                        </IconButton>
                    </div>
                    }
                />
            </div>
        );
    }
});

export default Header;