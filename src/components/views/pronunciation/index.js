import React from 'react';
import {Row, Col} from 'react-flexgrid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

const style = {
    "paddingTop" : "0.5rem",
    "paddingBottom" : "0.5rem",
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
                    {getCards(this.props.words)}
                </Row>
            </div>
        );
    }
});

function getCards(words) {

    return (words.map(word => {
        return (
            <Col key={"col-"+word.id} lg={3} xs={12} sm={12} md={6} style={style}>
                <Card key={"card-"+word.id}>
                    <CardHeader key={"card-header-"+word.id}
                                title={word.word}
                                subtitle={word.pronunciation}
                    />
                </Card>
            </Col>
        )
    }))
}

export default Pronunciation;