'use strict';

import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {lightBlue50} from 'material-ui/styles/colors';

require('styles//WordCard.css');

const shownAnswerStyle = {
  opacity: 1,
  fontSize: '120%',
  'transition': 'opacity 0.4s linear'
};
const hiddenAnswerStyle = {
  opacity: 0,
  fontSize: '100%',
  'transition': 'opacity 0.4s linear'
};
const customStyle = {
  paddingTop: '0.5ex',
  paddingBottom: '0.5ex',
};

let WordCardComponent = (props) => (
  <Card key={'card-'+props.word.is} className='check-word-card'
        style={props.word.checked ? {lineHeight: 1.5, fontSize:'80%', backgroundColor: lightBlue50} : {lineHeight: 1.5} }
  >
    <CardTitle key={'card-header-'+props.word.id}
               title={<div onClick={props.toggleAnswerStateAction.bind(null, props.word)}>{props.answer}</div>}
               showExpandableButton={true}
               titleStyle={props.word.checked ? shownAnswerStyle : hiddenAnswerStyle}
               style={customStyle}
               subtitle={<div onClick={props.toggleAnswerStateAction.bind(null, props.word)}>{props.question}</div>}
               subtitleStyle={{fontSize:'100%'}}
    >
    </CardTitle>
    <CardText expandable={true} key={'card-'+props.word.id}>
      <i>{props.word.wordData.pronunciations && props.word.wordData.pronunciations[props.student.dialect]? '/' + props.word.wordData.pronunciations[props.student.dialect] + '/' : ''}</i>
      {getTranslations(props.word.wordData.translations)}

    </CardText>
  </Card>
);

function getTranslations(translations) {
  if (typeof translations === 'undefined'
    || translations == 0 || translations == null) {
    return null;
  }
  var id=0;
  return (
    <div>
      <h5>
        Translations:
      </h5>
      <ul>
        {translations.map(t => {
          id++;
          return (
            <li key={'translaltion-'+id}>{t}</li>
          );
        })}
      </ul>
    </div>
  )
}

WordCardComponent.displayName = 'WordCardComponent';

export default WordCardComponent;
