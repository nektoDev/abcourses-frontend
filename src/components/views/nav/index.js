import React from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';

const Nav = React.createClass({

    render: function () {

        if (this.props.navigation === null) {
            return null;
        }

        return (
            <Drawer open={this.props.showNav} docked={this.props.docked}>
                <div className="left-nav">
                    {getNavigation(this.props.navigation)}
                </div>
            </Drawer>
        )
    }
});

function getNavigation(navigation) {
    return (
        navigation.map(sub => {
            return (
                <div key={"div-"+sub.id}>
                    <Subheader key={sub.id} inset={false}>{sub.title}</Subheader>
                    {getMenuItems(sub)}
                </div>
            )
        })
    )
}

function getMenuItems(sub) {
    return (
        sub.pages.map(page => {
            return (
                <MenuItem key={page.id}
                          containerElement={<Link to={page.url}/>}>{page.title}</MenuItem>
            )
        })
    )
}

export default Nav;