import React from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';

const Nav = React.createClass({

    render: function () {

        return (
            <Drawer open={this.props.showNav} docked={this.props.docked}>
                <div className="left-nav">
                    <Subheader inset={false}>Dasha&Slava</Subheader>
                    <MenuItem containerElement={<Link to="/div" />}>Vocabulary</MenuItem>
                    <MenuItem containerElement={<Link to="/div" />}>Slava's Pronunciation</MenuItem>
                    <MenuItem containerElement={<Link to="/div" />}>Dasha's Pronunciation</MenuItem>
                    <Subheader inset={false}>Aydar&Yulia</Subheader>
                    <MenuItem containerElement={<Link to="/aiy" />}>Vocabulary</MenuItem>
                    <MenuItem containerElement={<Link to="/aiy" />}>Aydar's Pronunciation</MenuItem>
                    <MenuItem containerElement={<Link to="/aiy" />}>Yulia's Pronunciation</MenuItem>
                </div>
            </Drawer>
        )
    }
});

export default Nav;