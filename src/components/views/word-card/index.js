import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import {lightBlue50} from 'material-ui/styles/colors';
import {Row, Col} from 'react-flexgrid';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';


const shownAnswerStyle = {
    opacity: 1,
    visibility: true,
    "transition": "opacity 0.4s linear"
};
const hiddenAnswerStyle = {
    opacity: 0,
    visibility: "hidden",
    "transition": "opacity 0.4s linear"
};

const WordCard = React.createClass({
    render: function () {
        return (
            <Card key={"card-"+this.props.word.id}
                  onClick={this.props.showAnswerHandler.bind(null, this.props.word)}
                  style={this.props.word.checked ? {backgroundColor: lightBlue50} : {} }
            >
                <CardTitle key={"card-header-"+this.props.word.id}
                           title={this.props.answer}
                           titleStyle={this.props.word.checked ? shownAnswerStyle : hiddenAnswerStyle}
                           subtitle={this.props.question}
                           subtitleStyle={{fontSize:"110%"}}
                >
                </CardTitle>
            </Card>
        );
    }
});

function getExpandableButton() {
    return (
        <IconButton tooltip="shuffle" style={shownAnswerStyle}>
            <FontIcon className="material-icons">shuffle</FontIcon>
        </IconButton>
    );
}

export default WordCard;