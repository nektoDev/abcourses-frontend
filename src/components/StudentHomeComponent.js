'use strict';

import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import {Row, Col} from 'react-flexgrid';
import {Link} from 'react-router';

let vocabulary = require('../images/vocabulary.jpg');
let pronunciation = require('../images/pronunciation.jpg');
let progress = require('../images/progress.jpg');

require('styles//StudentLayout.css');

let StudentHomeComponent = (props) => (
  <div>
    <Row>
      <Col lg={4} sm={12} md={4}>
        <Link to={'/' + props.student.id + '/vocabulary'}>
          <Card className='card' zDepth={2}>
            <CardMedia overlay={<CardTitle title='Vocabulary' subtitle='Try to remember all the words!' />}>
              <img src={vocabulary}/>
            </CardMedia>
          </Card>
        </Link>
      </Col>
      <Col lg={4} sm={12} md={4}>
        <Link to={'/' + props.student.id + '/pronunciation'}>
          <Card className='card' zDepth={2}>
            <CardMedia overlay={<CardTitle title='Pronunciation' subtitle='Put a spoon on your tongue!' />}>
              <img src={pronunciation}/>
            </CardMedia>
          </Card>
        </Link>
      </Col>
      <Col lg={4} sm={12} md={4}>
        <Link to={'/' + props.student.id + '/progress'}>
          <Card className='card' zDepth={2}>
            <CardMedia overlay={<CardTitle title='Progress' subtitle='Put a spoon on your tongue!' />}>
              <img src={progress}/>
            </CardMedia>
          </Card>
        </Link>
      </Col>
    </Row>
  </div>
);

StudentHomeComponent.displayName = 'StudentHomeComponent';

// Uncomment properties you need
// StudentHomeComponent.propTypes = {};
// StudentHomeComponent.defaultProps = {};

export default StudentHomeComponent;
