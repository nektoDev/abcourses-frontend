import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid, Row, Col} from 'react-flexgrid';
import {Link} from 'react-router';

const StudentHome = React.createClass({
    render: function () {
        return (
            <div>
                <Row>
                    <Col lg={6} sm={12} md={6}>
                        <Link to={"/" + this.props.student.id + "/vocabulary"}>
                            <Card className="card" zDepth={2}>
                                <CardMedia overlay={<CardTitle title="Vocabulary" subtitle="Try to remember all the words!" />}>
                                    <img src="http://lorempixel.com/600/400/nature/"/>
                                </CardMedia>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={6} sm={12} md={6}>
                        <Link to={"/" + this.props.student.id + "/pronunciation"}>
                            <Card className="card" zDepth={2}>
                                <CardMedia overlay={<CardTitle title="Pronunciation" subtitle="Put a spoon on your tongue!" />}>
                                    <img src="http://lorempixel.com/600/400/nature/?2"/>
                                </CardMedia>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        );
    }
});

export default StudentHome;