'use strict';

import React from 'react';
import {Row, Col} from 'react-flexgrid';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

require('styles//CheckWordsLayout.css');

let CheckWordsLayoutComponent = (props) => (
  <div className='words-layout'>
    {props.children}
    <Row>
      <Col lg={6} xs={12} sm={6} md={6}>
        <FlatButton
          label='Retry'
          style={{width: '100%'}}
          backgroundColor='rgba(0,0,0, 0.05)'
          hoverColor='rgba(0,0,0, 0.15)'
          icon={<FontIcon className='material-icons' color='rgba(255, 255, 255)'>refresh</FontIcon>}
          onClick={props.actions.retry}
        />
      </Col>
      <Col lg={6} xs={12} sm={6} md={6}>
        <FlatButton
          label='Remove checked'
          backgroundColor='rgba(0,0,0, 0.05)'
          hoverColor='rgba(0,0,0, 0.15)'
          style={{width: '100%'}}
          icon={<FontIcon className='material-icons' color='rgba(255, 255, 255)'>clear_all</FontIcon>}
          onClick={props.actions.removeChecked}
        />
      </Col>
    </Row>
  </div>
);

CheckWordsLayoutComponent.displayName = 'CheckWordsLayoutComponent';

// Uncomment properties you need
// CheckWordsLayoutComponent.propTypes = {};
// CheckWordsLayoutComponent.defaultProps = {};

export default CheckWordsLayoutComponent;
