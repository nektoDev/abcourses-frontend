import React from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';

const styles = {
    hidden: {
        display: "none",
    }
};

const Nav = React.createClass({
    render: function () {

        return (
            <Drawer open={this.props.showNav} docked={this.props.docked}>
                <div className="left-nav">
                    {getStudentLinks(this.props.student)}
                    {getUsefulLinks(this.props.usefulLinks)}
                </div>

                <Subheader className="footer">
                    <Divider />
                    <p><a href="http://nektodev.ru">©2016 Tsykin V.A.</a></p>
                    <IconButton tooltip="github" tooltipPosition="top-center" tooltipStyle={{color:"#fff !important"}}>
                        <a href="https://github.com/nektoDev/baskinov-frontend"><FontIcon
                            color="rgba(0, 0, 0, 0.341176)" className="zmdi zmdi-github"></FontIcon></a>
                    </IconButton>
                </Subheader>
            </Drawer>
        )
    }
});

function getStudentLinks(student) {
    return ( Object.keys(student).length === 0 ? null :
            <div>
                <Subheader inset={false}>{student.name}</Subheader>
                <MenuItem containerElement={<Link to={"/"+student.id+"/vocabulary"}/>}>Vocabulary</MenuItem>
                <MenuItem containerElement={<Link to={"/"+student.id+"/pronunciation"}/>}>Pronunciation</MenuItem>
                <MenuItem containerElement={<Link to={"/"+student.id+"/progress"}/>}>Progress</MenuItem>
            </div>
    )
}


function getUsefulLinks(usefulLinks) {

    if (typeof usefulLinks === 'undefined' || usefulLinks.length == 0) return null;

    return (
        <div>
            <Subheader inset={false}>Useful Links</Subheader>
            {usefulLinks.map((link) => {
                    return <a target="_blank" className="link-not-link" href={link.url}><MenuItem primaryText={link.name}/></a>
                }
            )}
        </div>
    )
}


export default Nav;