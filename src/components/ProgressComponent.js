'use strict';

import React from 'react';
import {Line} from 'react-chartjs-2';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import {Row, Col} from 'react-flexgrid';
import {lightGreenA100} from 'material-ui/styles/colors';
import _ from 'lodash';
import Loader from './LoaderComponent';

require('styles//Progress.css');
var moment = require('moment');


const options = {
  fillText: 'dafas',
  scales: {
    xAxes: [{}],
    yAxes: [{
      ticks: {
        min: 0
      }
    }]
  }
};

let ProgressComponent = (props) => {
  if (typeof props.progress === 'undefined' || props.progress.length == 0
    || Object.keys(props.progress).length === 0 ||
    typeof props.progressData === 'undefined' || props.progressData == null || props.progressData.length == 0
    || Object.keys(props.progressData).length === 0) {
    return (
      <div className='progress-component'>
        <Loader/>
      </div>
    );
  }
  return (

    <div>
      <h2>Progress</h2>
      <Line data={props.progressData} options={options}/>

      <Row>
        <Col lg={6} sm={12} md={6}>
          <Col xs={12}>
            <h2>Test results</h2>
            <Table displayRowCheckbox={false}>
              <TableBody displayRowCheckbox={false}>
                <TableRow>
                  <TableRowColumn>Date</TableRowColumn>
                  <TableRowColumn>Score</TableRowColumn>
                </TableRow>
                {getTest(props.progress)}
              </TableBody>
            </Table>
          </Col>
          <Col xs={12}>
            <h2>Best results [{getBestCount(props.progressDataMap)}]</h2>
            <Table displayRowCheckbox={false}>
              <TableBody displayRowCheckbox={false}>
                <TableRow>
                  <TableRowColumn>Date</TableRowColumn>
                  <TableRowColumn>Pronunciation</TableRowColumn>
                  <TableRowColumn>Vocabulary</TableRowColumn>
                </TableRow>
                {getBest(props.progressDataMap)}
              </TableBody>
            </Table>
          </Col>
        </Col>
        <Col lg={6} sm={12} md={6}>
          <h2>Progress data</h2>
          <Table displayRowCheckbox={false}>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>Date</TableRowColumn>
                <TableRowColumn>Pronunciation</TableRowColumn>
                <TableRowColumn>Vocabulary</TableRowColumn>
                <TableRowColumn>Test</TableRowColumn>
              </TableRow>
              {getRows(props.progressDataMap)}
            </TableBody>
          </Table>
        </Col>
      </Row>
    </div>
  )
};

function getTest(data) {
  return _.sortBy(data.test, v => (-Number(v.date))).map(v => (
    <TableRow key={'row-' + v.date}>
      <TableRowColumn key={'date-' + v.date}>{moment(Number(v.date)).format('Do MMMM YYYY')}</TableRowColumn>
      <TableRowColumn key={'test-' + v.date}>{v.value}</TableRowColumn>
    </TableRow>
  ))
}

function getBest(progressDataMap) {
  return (
    _.sortBy(Object.keys(progressDataMap), k => (-Number(k))).map(key => {
      if (progressDataMap[key].pronunciation == 100 && progressDataMap[key].vocabulary == 100) {
        return (
          <TableRow key={'row-' + key}>
            <TableRowColumn key={'date-' + key}>{moment(key).format('Do MMMM YYYY')}</TableRowColumn>
            <TableRowColumn key={'pron-' + key}>{progressDataMap[key].pronunciation}</TableRowColumn>
            <TableRowColumn key={'voc-' + key}>{progressDataMap[key].vocabulary}</TableRowColumn>
          </TableRow>
        )
      }
    })
  )
}

function getBestCount(progressDataMap) {
  let count = 0;
  Object.keys(progressDataMap).map(key => {
    if (progressDataMap[key].pronunciation == 100 && progressDataMap[key].vocabulary == 100) {
      count++;
    }
  });

  return count;
}


function getRows(progressDataMap) {
  return (
    _.sortBy(Object.keys(progressDataMap), k => (-Number(k))).map(key => (
        <TableRow key={'row-' + key}
                  style={(progressDataMap[key].pronunciation == 100 && progressDataMap[key].vocabulary == 100) ? {backgroundColor: lightGreenA100} : ''}>
          <TableRowColumn key={'date-' + key}>{moment(key).format('Do MMMM YYYY')}</TableRowColumn>
          <TableRowColumn key={'pron-' + key}>{progressDataMap[key].pronunciation}</TableRowColumn>
          <TableRowColumn key={'voc-' + key}>{progressDataMap[key].vocabulary}</TableRowColumn>
          <TableRowColumn key={'test-' + key}>{progressDataMap[key].test}</TableRowColumn>
        </TableRow>
      )
    )
  )
}


ProgressComponent.displayName = 'ProgressComponent';

// Uncomment properties you need
// ProgressComponent.propTypes = {};
// ProgressComponent.defaultProps = {};

export default ProgressComponent;
