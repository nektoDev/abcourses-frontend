import React from 'react';
import {Row, Col} from 'react-flexgrid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import {lightBlue50} from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon';

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
            <div>
                <Row fluid="true">
                    <Col sm={12} xs={12} md={12} lg={12}>
                        <h1>Pronunciation {this.props.student}</h1>
                    </Col>
                </Row>
                <Row>
                    {getCards(this.props.words, this.props.showAnswerHandler, this.props.checkWordHandler)}
                </Row>
                <Row>
                    <Col lg={6} xs={12} sm={6} md={6}>
                        <FlatButton
                            label="Retry"
                            style={{width: "100%"}}
                            backgroundColor="rgba(0,0,0, 0.05)"
                            hoverColor="rgba(0,0,0, 0.15)"
                            icon={<FontIcon className="material-icons" color="rgba(255, 255, 255, 0.870588)">shuffle</FontIcon>}
                            onClick={this.props.shuffle}
                        />
                    </Col>
                    <Col lg={6} xs={12} sm={6} md={6}>
                        <FlatButton
                            label="Remove checked"
                            backgroundColor="rgba(0,0,0, 0.05)"
                            hoverColor="rgba(0,0,0, 0.15)"
                            style={{width: "100%"}}
                            icon={<FontIcon className="material-icons" color="rgba(255, 255, 255, 0.870588)">clear_all</FontIcon>}
                            onClick={this.props.removeCheckedHandler}
                        />
                    </Col>
                </Row>
            </div>
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