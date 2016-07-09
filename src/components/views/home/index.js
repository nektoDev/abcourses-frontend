import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid, Row, Col} from 'react-flexgrid';
import {Link} from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const Home = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Alexey Baskinov English Courses</h1>
                <Row>
                    <Col lg={9}>
                        <Row>
                            <Col lg={6}>
                                <Link to="/slava/">
                                    <Card className="card" zDepth={2}>
                                        <CardMedia overlay={<CardTitle title="Slava"/>}>
                                            <img src="http://lorempixel.com/600/400/nature/?1"/>
                                        </CardMedia>
                                    </Card>
                                </Link>
                            </Col>
                            <Col lg={6}>
                                <Link to="/dasha/">
                                    <Card className="card" zDepth={2}>
                                        <CardMedia overlay={<CardTitle title="Dasha"/>}>
                                            <img src="http://lorempixel.com/600/400/nature/?2"/>
                                        </CardMedia>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Link to="/aydar/">
                                    <Card className="card" zDepth={2}>
                                        <CardMedia overlay={<CardTitle title="Aydar"/>}>
                                            <img src="http://lorempixel.com/600/400/nature/?3"/>
                                        </CardMedia>
                                    </Card>
                                </Link>
                            </Col>
                            <Col lg={6}>
                                <Link to="/yuliya/">
                                    <Card className="card" zDepth={2}>
                                        <CardMedia overlay={<CardTitle title="Yuliya"/>}>
                                            <img src="http://lorempixel.com/600/400/nature/?4"/>
                                        </CardMedia>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3}>
                        <h2>Useful links</h2>
                            <Menu>
                                <MenuItem primaryText="Oxford dictionary" containerElement={<a href="https://www.oxfordlearnersdictionaries.com/"/>}/>
                                <MenuItem primaryText="Forvo" containerElement={<a href="http://ru.forvo.com/"/>}/>
                            </Menu>
                    </Col>

                </Row>
            </div>
        );
    }
});

export default Home;