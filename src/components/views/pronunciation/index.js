import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import {Row, Col} from 'react-flexgrid';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {lightBlue50} from 'material-ui/styles/colors'

const style = {
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "transition": "all 0.5s linear"

};
const shownSubtitleStyle = {
    opacity: 1,
    visibility: true,
    "transition": "opacity 0.4s linear"
};
const hiddenSubtitleStyle = {
    opacity: 0,
    visibility: "hidden",
    "transition": "opacity 0.4s linear"
};

const Pronunciation = React.createClass({
    render: function () {
        return (
            <Row>
                {getCards(this.props.words, this.props.showAnswerHandler, this.props.checkWordHandler)}</Row>
        );
    }
});

function getCards(words, showAnswerHandler, checkWordHandler) {

    return (words.map(word => {
        return (
            <Col key={"col-"+word.id} lg={3} xs={12} sm={12} md={6} style={style}>
                <Card key={"card-"+word.id}
                      onClick={showAnswerHandler.bind(null, word)}
                      style={word.checked ? {backgroundColor: lightBlue50} : {} }
                >
                    <CardTitle key={"card-header-"+word.id}
                               title={
                                        <Toggle label={word.word} toggled={word.checked} onToggle={checkWordHandler.bind(null, word)}/>
                                    }
                               titleStyle={{fontSize: "110%", fontWeight: 400}}
                               subtitle={(word.isAnswerShow || word.checked) ? word.pronunciation : " "}
                               subtitleStyle={(word.isAnswerShow || word.checked) ? shownSubtitleStyle : hiddenSubtitleStyle}
                    >

                    </CardTitle>
                </Card>
            </Col>
        )
    }))
}

export default Pronunciation;