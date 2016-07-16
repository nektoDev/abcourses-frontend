import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import {lightBlue50} from 'material-ui/styles/colors';
import {Row, Col} from 'react-flexgrid';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';


const shownAnswerStyle = {
    opacity: 1,
    fontSize: "100%",
    "transition": "opacity 0.4s linear"
};
const hiddenAnswerStyle = {
    opacity: 0,
    fontSize: "100%",
    "transition": "opacity 0.4s linear"
};

const WordCard = React.createClass({
    render: function () {

        return (
            <Card key={"card-"+this.props.word.id}
                  style={this.props.word.checked ? {backgroundColor: lightBlue50} : {} }
            >
                <CardTitle key={"card-header-"+this.props.word.id}
                           title={<div onClick={this.props.toggleAnswerHandler.bind(null, this.props.word)}>{this.props.answer}</div>}
                           showExpandableButton={true}
                           titleStyle={this.props.word.checked ? shownAnswerStyle : hiddenAnswerStyle}
                           subtitle={<div onClick={this.props.toggleAnswerHandler.bind(null, this.props.word)}>{this.props.question}</div>}
                           subtitleStyle={{fontSize:"100%"}}
                >
                </CardTitle>
                <CardText expandable={true}>
                    {this.props.word.word.pronunciation ? "/" + this.props.word.word.pronunciation[this.props.student.dialect] + "/" : ""}
                    {getTranslations(this.props.word.word.translation)}
                </CardText>
            </Card>
        );
    }
});

function getTranslations(translations) {
    if (typeof translations === 'undefined'
        || translations == 0 || translations == null) {
        return null;
    }

    return (
        <div>
            <h5>
                Translations:
            </h5>
            <ul>
                {translations.map(t => {
                    return (
                        <li>{t}</li>
                    );
                })}
            </ul>
        </div>
    )
}

export default WordCard;