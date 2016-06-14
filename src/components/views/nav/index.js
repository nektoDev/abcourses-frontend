import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default function (props) {
    return (
        <Drawer open={props.showNav}>
            <div className="left-nav">
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </div>
        </Drawer>
    );
}