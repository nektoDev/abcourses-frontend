import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid, Row, Col} from 'react-flexgrid';
import {Link} from 'react-router';

export default function (props) {
    return (
        <div>
            <h2>Slava & Dasha</h2>

            <Row>
                <Col lg={4} sm={12} md={12}>
                    <Link to="/div">
                        <Card className="card" zDepth={2}>
                            <CardMedia
                                overlay={<CardTitle title="Vocabulary" subtitle="Try to remember all the words" />}
                            >
                                <img src="http://dummyimage.com/600x400/FF5722/FF5722.png"/>
                            </CardMedia>
                        </Card>
                    </Link>
                </Col>

                <Col lg={4} sm={12} md={12}>
                    <Link to="/div">
                        <Card className="card"  zDepth={2}>
                            <CardMedia
                                overlay={<CardTitle title="Pronunciation" subtitle="Slava" />}
                            >
                                <img src="http://dummyimage.com/600x400/FF5722/FF5722.png"/>
                            </CardMedia>
                        </Card>
                    </Link>
                </Col>
                <Col lg={4} sm={12} md={12}>
                    <Link to="/div">
                        <Card className="card"  zDepth={2}>
                            <CardMedia
                                overlay={<CardTitle title="Pronunciation" subtitle="Dasha" />}
                            >
                                <img src="http://dummyimage.com/600x400/FF5722/FF5722.png"/>
                            </CardMedia>
                        </Card>
                    </Link>
                </Col>
            </Row>


            <h2>Aydar & Yulia</h2>
            <Row>
                <Col lg={4} sm={12} md={12}>
                    <Link to="/aiy">
                        <Card className="card"  zDepth={2}>
                            <CardMedia
                                overlay={<CardTitle title="Vocabulary" subtitle="Try to remember all the words" />}
                            >
                                <img src="http://dummyimage.com/600x400/FF5722/FF5722.png"/>
                            </CardMedia>
                        </Card>
                    </Link>
                </Col>

                <Col lg={4} sm={12} md={12}>
                    <Link to="/aiy">
                        <Card className="card"  zDepth={2}>
                            <CardMedia
                                overlay={<CardTitle title="Pronunciation" subtitle="Aydar" />}
                            >
                                <img src="http://dummyimage.com/600x400/FF5722/FF5722.png"/>
                            </CardMedia>
                        </Card>
                    </Link>
                </Col>
                <Col lg={4} sm={12} md={12}>
                    <Link to="/aiy">
                        <Card className="card" zDepth={2}>
                            <CardMedia
                                overlay={<CardTitle title="Pronunciation" subtitle="Yulia" />}
                            >
                                <img src="http://dummyimage.com/600x400/FF5722/FF5722.png"/>
                            </CardMedia>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
