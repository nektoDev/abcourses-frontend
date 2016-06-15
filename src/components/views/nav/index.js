import React from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Nav = React.createClass({

    render: function () {

        return (
            <Drawer open={this.props.showNav} docked={this.props.docked}>
                <div className="left-nav">
                    <MenuItem containerElement={<Link to="/div" />}>Menu Item 1</MenuItem>
                    <MenuItem containerElement={<Link to="/aiy" />}>Menu Item 2</MenuItem>
                </div>
            </Drawer>
        )
    }
});

export default Nav;