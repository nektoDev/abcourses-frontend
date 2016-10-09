'use strict';

import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
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
    <Row>
      <Col sm={12}>
      {getStatistics(props.studentStats)}
        </Col>
    </Row>
  </div>
);

function getStatistics(stats) {
  if (typeof stats === 'undefined' || stats == 0
    || Object.keys(stats).length === 0) {
    return null;
  } else {
    return (
        <div>
        <h2>Statistics</h2>
          <p>Words count: {stats.wordsCount}</p>
          <p>UniqueWordsCount: {stats.uniqueWordsCount}</p>
          <p>homeworksCount: {stats.homeworksCount}</p>
          <p>testCount: {stats.testCount}</p>
          <p>topScoreCount: {stats.topScoreCount}</p>
          <p>topVocabularyCount: {stats.topVocabularyCount}</p>
          <p>topPronunciationCount: {stats.topPronunciationCount}</p>
          <p>avgVocabularyWordsCount: {stats.avgVocabularyWordsCount}</p>
          <p>avgPronunciationWordsCount: {stats.avgPronunciationWordsCount}</p>
          <p>avgVocabularyScore: {stats.avgVocabularyScore}</p>
          <p>avgPronunciationScore: {stats.avgPronunciationScore}</p>
          <p>avgTestScore: {stats.avgTestScore}</p>
          <p>freqWord: {stats.mostFrequentWords[0].id} {stats.mostFrequentWords[0].countUses[stats.student]}</p>
        </div>
        )
  }
}

StudentHomeComponent.displayName = 'StudentHomeComponent';

// Uncomment properties you need
// StudentHomeComponent.propTypes = {};
// StudentHomeComponent.defaultProps = {};

export default StudentHomeComponent;
