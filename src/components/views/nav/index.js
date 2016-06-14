import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Nav = React.createClass({

    render: function () {

        return (
            <Drawer open={this.props.showNav}>
                <div className="left-nav">
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </div>
            </Drawer>
        )
    }
});

export default Nav;