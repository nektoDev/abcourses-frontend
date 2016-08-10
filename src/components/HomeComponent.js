'use strict';

import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import {Row, Col} from 'react-flexgrid';
import {Link} from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

require('styles//Home.css');

let HomeComponent = (props) => (
  <div>
    <h1>Alexey Baskinov English Courses
    </h1>
    <Row>
      <Col lg={9}>
        {getStudents(props.students)}
      </Col>
      <Col lg={3}>
        <h2>Useful links</h2>
        <Menu>
          {getUsefulLinks(props.usefulLinks.links)}
        </Menu>
      </Col>

    </Row>
  </div>
);

function getStudents(students) {
  if (!students || students.length == 0) return null;
  return (
    <Row>
      {students.map((student) => {
          return (<Col lg={6} key={'student'+student.id}>
            <Link to={'/'+student.id+'/'}>
              <Card className='card' zDepth={2}>
                <CardMedia overlay={<CardTitle title={student.name}/>}>
                  <img src={require('../images/'+student.id+'.jpg')}/>
                </CardMedia>
              </Card>
            </Link>
          </Col>);
        }
      )}
    </Row>
  )
}


function getUsefulLinks(links) {
  if (!links || links.length == 0) return null;
  return (
    <div>
      {links.map((link) => {
          return link.checked ? <a target='_blank' className='link-not-link' href={link.url} key={link.name}><MenuItem primaryText={link.name}/></a> : null;
        }
      )}
    </div>
  )
}

HomeComponent.displayName = 'HomeComponent';

// Uncomment properties you need
// HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default HomeComponent;
