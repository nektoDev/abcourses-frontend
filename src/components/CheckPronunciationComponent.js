'use strict';

import React from 'react';
import WordCard from './WordCardComponent';
import {Row, Col} from 'react-flexgrid';

require('styles//CheckPronunciation.css');

let CheckPronunciationComponent = (props) => {
  if (typeof props.words === 'undefined'
    || props.words.length == 0) {
    return <h3>Well Done! All your words are belong to us!</h3>;
  }

  return (
    <Row>
      {getCards(props.words, props.student, props.actions.toggleAnswerStateAction)}
    </Row>);
};

function getCards(words, student, toggleAnswerStateAction) {
  let id = 0;
  return (words.map(word => {
    id++;
    return (
      <Col key={'col-'+word.wordId+id} lg={3} xs={12} sm={12} md={6} className='word-col'>
        <WordCard word={word}
                  key={'wc-'+word.wordId+id}
                  question={word.question}
                  answer={word.answer}
                  student={student}
                  id={id}
                  toggleAnswerStateAction={toggleAnswerStateAction}
        />
      </Col>
    )
  }))
}

CheckPronunciationComponent.displayName = 'CheckPronunciationComponent';

// Uncomment properties you need
// CheckPronunciationComponent.propTypes = {};
// CheckPronunciationComponent.defaultProps = {};

export default CheckPronunciationComponent;
