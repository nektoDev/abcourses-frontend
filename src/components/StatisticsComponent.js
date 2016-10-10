'use strict';

import React from 'react';
import {Row, Col} from 'react-flexgrid';

let StatisticsComponent = (props) => (
  <div>
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

StatisticsComponent.displayName = 'StatisticsComponent';

// Uncomment properties you need
// StudentHomeComponent.propTypes = {};
// StudentHomeComponent.defaultProps = {};

export default StatisticsComponent;
