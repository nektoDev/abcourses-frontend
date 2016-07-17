import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import WordCard from '../word-card/index';
import {Row, Col} from 'react-flexgrid';
import {lightBlue50} from 'material-ui/styles/colors'

const style = {
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "transition": "all 0.5s linear"

};


const Pronunciation = React.createClass({
    render: function () {
        if (typeof this.props.words === 'undefined'
            || this.props.words.length == 0) {
            return <h3>Well Done! All your words are belong to us!</h3>;
        }
        return (
            <Row>
                {getCards(this.props.words, this.props.student, this.props.toggleAnswerHandler)}
            </Row>
        );
    }
});

function getCards(words, student, toggleAnswerHandler) {

    return (words.map(word => {
        return (
            <Col key={"col-"+word.wordId} lg={3} xs={12} sm={12} md={6} style={style}>
                <WordCard word={word}
                          question={word.question}
                          answer={word.answer}
                          toggleAnswerHandler={toggleAnswerHandler}
                          student={student}
                />
            </Col>
        )
    }))
}

export default Pronunciation;