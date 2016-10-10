'use strict';

import React from 'react';
import {Row, Col} from 'react-flexgrid';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import * as Color from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider'

require('styles//Statistics.css');

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
        <Row>
          <Col sm={12}><h2>Statistics</h2></Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Row>
              <Subheader className="stat-subheader">Your vocabulary contains</Subheader>
              <Col lg={6} md={6} sm={6}>
                <div className="stat-number stat-number-accent">
                  <div className="number">
                    {stats.wordsCount}
                  </div>
                  <div className="annotation">
                    Words
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6}>
                <div className="stat-number stat-number-accent ">
                  <div className="number ">
                    {stats.uniqueWordsCount}
                  </div>
                  <div className="annotation">
                    Unique words
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Row>
              <Subheader className="stat-subheader">Your have done</Subheader>
              <Col lg={6} md={6} sm={12}>
                <div className="stat-number">
                  <div className="number">
                    {stats.testCount}
                  </div>
                  <div className="annotation">
                    Tests
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="stat-number">
                  <div className="number">
                    {stats.homeworksCount}
                  </div>
                  <div className="annotation">
                    Homeworks <br/>with average:
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Row>
              <Subheader className="stat-subheader">Homework contains:</Subheader>
              <Col lg={6} md={6} sm={12}>
                <div className="stat-number">
                  <div className="number">
                    {Number(stats.avgVocabularyWordsCount).toFixed(2)}
                  </div>
                  <div className="annotation">
                    Words in vocabulary
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="stat-number">
                  <div className="number">
                    {Number(stats.avgPronunciationWordsCount).toFixed(2)}
                  </div>
                  <div className="annotation">
                    Words in pronunciation
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <br/>
        <Divider />
        <br/>

        <Row>
          <Col lg={2} md={4} sm={6}>
            <div
              className={Number(stats.topScoreCount) > "0" ? "stat-number stat-number-accent" : "stat-number stat-number-fail"}>
              <div className="number">
                {stats.topScoreCount}
              </div>
              <div className="annotation">
                Top score count
              </div>
            </div>
          </Col>
          <Col lg={2} md={4} sm={6}>
            <div
              className={Number(stats.topVocabularyCount) > "0" ? "stat-number" : "stat-number stat-number-fail"}>
              <div className="number">
                {stats.topVocabularyCount}
              </div>
              <div className="annotation">
                Top vocabulary score count
              </div>
            </div>
          </Col>
          <Col lg={2} md={4} sm={6}>
            <div
              className={Number(stats.topPronunciationCount) > "0" ? "stat-number" : "stat-number stat-number-fail"}>
              <div className="number">
                {stats.topPronunciationCount}
              </div>
              <div className="annotation">
                Top pronunciation score count
              </div>
            </div>
          </Col>

          <Col lg={2} md={4} sm={6}>
            <div className={getClassForScoreStatistics(stats.avgVocabularyScore)}>
              <div className="stat-number-progress"></div>
              <div className="stat-number-progress-percentage" style={{width: stats.avgVocabularyScore + "%"}}></div>
              <div className="number">
                {Number(stats.avgVocabularyScore).toFixed(2)}
              </div>
              <div className="annotation">
                Average vocabulary score
              </div>
            </div>
          </Col>
          <Col lg={2} md={4} sm={6}>
            <div className={getClassForScoreStatistics(stats.avgPronunciationScore)}>
              <div className="stat-number-progress"></div>
              <div className="stat-number-progress-percentage" style={{width: stats.avgPronunciationScore + "%"}}></div>
              <div className="number">
                {Number(stats.avgPronunciationScore).toFixed(2)}
              </div>
              <div className="annotation">
                Average pronunciation score
              </div>
            </div>
          </Col>
          <Col lg={2} md={4} sm={6}>
            <div className={getClassForScoreStatistics(stats.avgTestScore)}>
              <div className="stat-number-progress"></div>
              <div className="stat-number-progress-percentage" style={{width: stats.avgTestScore + "%"}}></div>
              <div className="number">
                {Number(stats.avgTestScore).toFixed(2)}
              </div>
              <div className="annotation">
                Average test score
              </div>
            </div>
          </Col>

        </Row>

        <br/>
        <Divider />
        <br/>

        <Row>
          <Subheader>Words that appeared more frequently</Subheader>
          {stats.mostFrequentWords.map(w => {
            return (
              <div lg={6} md={4} sm={4} className="stat-chip">
                <Chip backgroundColor={Color.grey300}>
                  <Avatar size={32} backgroundColor={Color.grey600}>{w.countUses[stats.student]}</Avatar>
                  {w.id}
                </Chip>
              </div>
            )
          })}
        </Row>
      </div>
    )
  }
}

function getClassForScoreStatistics(stat) {
  if (Number(stat) >= "90") {
    return "stat-number stat-number-success";
  } else if (Number(stat) >= 80) {
    return "stat-number stat-number-warning";
  }
  return "stat-number stat-number-fail";
}

StatisticsComponent.displayName = 'StatisticsComponent';

// Uncomment properties you need
// StudentHomeComponent.propTypes = {};
// StudentHomeComponent.defaultProps = {};

export default StatisticsComponent;
