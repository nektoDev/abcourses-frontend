import React from 'react';
import {Row, Col} from 'react-flexgrid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const Pronunciation = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Pronunciation {this.props.student}</h1>
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
            <Col key={"col-"+word.id} lg={3} sm={12} md={6}>
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