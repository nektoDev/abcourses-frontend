import React from 'react';
import {Row, Col} from 'react-flexgrid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "transition": "all 0.5s linear"

}

const shownSubtitleStyle = {
    opacity: 1,
    visibility: true,
    "transition": "opacity 0.4s linear"
}
const hiddenSubtitleStyle = {
    opacity: 0,
    visibility: "hidden",
    "transition": "opacity 0.4s linear"
}

const Pronunciation = React.createClass({
    render: function () {
        return (
            <div>
                <Row fluid="true">
                    <Col sm={12} xs={12} md={12} lg={12}>
                        <h1>Pronunciation {this.props.student}</h1>
                    </Col>
                </Row>
                <Row>
                    {getCards(this.props.words, this.props.showAnswerHandler)}
                </Row>
            </div>
        );
    }
});

function getCards(words, showAnswerHandler) {

    return (words.map(word => {
        return (
            <Col key={"col-"+word.id} lg={3} xs={12} sm={12} md={6} style={style}>
                <Card key={"card-"+word.id} onClick={showAnswerHandler.bind(null, word)}>
                    <CardHeader key={"card-header-"+word.id}
                                title={word.word}
                                subtitle={word.isAnswerShow ? word.pronunciation : " "}
                                subtitleStyle={word.isAnswerShow ? shownSubtitleStyle : hiddenSubtitleStyle}
                    />
                </Card>
            </Col>
        )
    }))
}

export default Pronunciation;