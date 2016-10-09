'use strict';

import React from 'react';
import WordCard from './WordCardComponent';
import {Row, Col} from 'react-flexgrid';

require('styles//CheckVocabulary.css');

let CheckVocabularyComponent = (props) => {
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
  return (words.map(word => {
    return (
      <Col key={'col-'+word.id} lg={3} xs={12} sm={12} md={6} className='word-col'>
        <WordCard word={word}
                  key={'wc-'+word.id}
                  question={word.question}
                  answer={word.answer}
                  student={student}
                  toggleAnswerStateAction={toggleAnswerStateAction}
        />
      </Col>
    )
  }))
}

CheckVocabularyComponent.displayName = 'CheckVocabularyComponent';

export default CheckVocabularyComponent;
