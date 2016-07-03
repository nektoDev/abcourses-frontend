import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import {lightBlue50} from 'material-ui/styles/colors';
import {Row, Col} from 'react-flexgrid';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';


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

const WordCard = React.createClass({
    render: function () {
        return (
            <Card key={"card-"+this.props.word.id}
                  onClick={this.props.showAnswerHandler.bind(null, this.props.word)}
                  style={this.props.word.checked ? {backgroundColor: lightBlue50} : {} }
            >
                <CardTitle key={"card-header-"+this.props.word.id}
                           title={
                                        <Toggle label={this.props.word.word} toggled={this.props.word.checked}
                                        onToggle={this.props.checkWordHandler.bind(null, this.props.word)}/>
                                    }
                           titleStyle={{fontSize: "110%", fontWeight: 400}}
                           subtitle={(<div>
                                {(this.props.word.isAnswerShow || this.props.word.checked) ? this.props.answer : " "}
                                <IconButton tooltip="shuffle" >
                                    <FontIcon className="material-icons" style={shownSubtitleStyle}>shuffle</FontIcon>
                                 </IconButton>
                                 </div>
                           )}
                           subtitleStyle={(this.props.word.isAnswerShow || this.props.word.checked) ? shownSubtitleStyle : hiddenSubtitleStyle}
                >
                </CardTitle>
                <CardText expandable={true}>
                    {this.props.answer}
                </CardText>
            </Card>
        );
    }
});

function getExpandableButton() {
    return (
        <IconButton tooltip="shuffle" style={shownSubtitleStyle}>
            <FontIcon className="material-icons">shuffle</FontIcon>
        </IconButton>
    );
}

export default WordCard;