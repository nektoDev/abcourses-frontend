'use strict';

import React from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';

require('styles//NavBar.css');

let NavBarComponent = (props) => (
  <Drawer open={props.isNavBarOpen} docked={true}>
    <div className='left-nav'>
      {getStudentLinks(props.student)}
      {getUsefulLinks(props.usefulLinks.links)}
    </div>

    <Subheader className='footer'>
      <Divider />
      <p><a href='http://nektodev.ru'>©2016 Tsykin V.A.</a></p>
      <IconButton tooltip='github' tooltipPosition='top-center' tooltipStyle={{color:'#fff !important'}}>
        <a href='https://github.com/nektoDev/baskinov-frontend'><FontIcon
          color='rgba(0, 0, 0, 0.341176)' className='zmdi zmdi-github'></FontIcon></a>
      </IconButton>
    </Subheader>
  </Drawer>
);

function getStudentLinks(student) {
  return (!student || Object.keys(student).length === 0 ? null :
      <div>
        <Subheader inset={false}>{student.name}</Subheader>
        <MenuItem containerElement={<Link to={'/'+student.id+'/vocabulary'}/>}>Vocabulary</MenuItem>
        <MenuItem containerElement={<Link to={'/'+student.id+'/pronunciation'}/>}>Pronunciation</MenuItem>
        <MenuItem containerElement={<Link to={'/'+student.id+'/progress'}/>}>Progress</MenuItem>
      </div>
  )
}


function getUsefulLinks(links) {

  if (!links) return null;

  return (
    <div>
      <Subheader inset={false}>Useful Links</Subheader>
      {links.map((link) => {
          return link.checked ? <a target='_blank' className='link-not-link' href={link.url} key={link.name}><MenuItem primaryText={link.name}/></a> : null;
        }
      )}
    </div>
  )
}

NavBarComponent.displayName = 'NavBarComponent';

// Uncomment properties you need
// NavBarComponent.propTypes = {};
NavBarComponent.defaultProps = {isNavBarOpen: true, usefulLinks:[]};

export default NavBarComponent;
