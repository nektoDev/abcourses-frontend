import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

var Nav = React.createClass({

    componentWillMount: function(props) {
        this.state = {open: true};
    },

    handleToggle: function() {this.setState({open: !this.state.open})},

    render: function() {
        return (
            <Drawer  open={this.state.open}>
                <div className="left-nav">
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </div>
            </Drawer>
        );
    }
})

export default Nav;
