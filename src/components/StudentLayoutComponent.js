'use strict';

import React from 'react';
import {Row, Col} from 'react-flexgrid';
import StudentHomeComponent from './StudentHomeComponent';
import {Link} from 'react-router';
import {FontIcon, IconButton} from "material-ui";

require('styles//StudentLayout.css');

let StudentLayoutComponent = (props) => (
  <div className='student-layout'>
    <Row fluid='true'>
      <Col sm={12} xs={12} md={12} lg={12}>
        <h1><Link className='link-not-link' to={'/' + props.student.id}>{props.student.name}</Link>
          <IconButton onClick={props.actions.updateHomework.bind(null, props.student.id)}>
            <FontIcon className='material-icons'>refresh</FontIcon>
          </IconButton>
        </h1>
      </Col>
    </Row>
    {props.children ||
    <StudentHomeComponent params={props.params} student={props.student} studentStats={props.studentStats}/>}
  </div>
);

StudentLayoutComponent.displayName = 'StudentLayoutComponent';

// Uncomment properties you need
// StudentLayoutComponent.propTypes = {};
// StudentLayoutComponent.defaultProps = {};

export default StudentLayoutComponent;
