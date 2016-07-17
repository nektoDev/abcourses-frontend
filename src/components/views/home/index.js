import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid, Row, Col} from 'react-flexgrid';
import {Link} from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import aydar from '../../../img/aydar.jpg';
import dasha from '../../../img/dasha.jpg';
import slava from '../../../img/slava.jpg';
import yuliya from '../../../img/yuliya.jpg';

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
                                            <img src={slava}/>
                                        </CardMedia>
                                    </Card>
                                </Link>
                            </Col>
                            <Col lg={6}>
                                <Link to="/dasha/">
                                    <Card className="card" zDepth={2}>
                                        <CardMedia overlay={<CardTitle title="Dasha"/>}>
                                            <img src={dasha}/>
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
                                            <img src={aydar}/>
                                        </CardMedia>
                                    </Card>
                                </Link>
                            </Col>
                            <Col lg={6}>
                                <Link to="/yuliya/">
                                    <Card className="card" zDepth={2}>
                                        <CardMedia overlay={<CardTitle title="Yuliya"/>}>
                                            <img src={yuliya}/>
                                        </CardMedia>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3}>
                        <h2>Useful links</h2>
                            <Menu>
                                <a target="_blank"  href="https://www.oxfordlearnersdictionaries.com/"><MenuItem primaryText="Oxford dictionary"/></a>
                                <a target="_blank"  href="http://ru.forvo.com/"><MenuItem primaryText="Forvo" /></a>
                                <a target="_blank"  href="http://translate.academic.ru/"><MenuItem primaryText="Academic translate"/></a>
                                <a target="_blank"  href="http://www.merriam-webster.com/"><MenuItem primaryText="Merriam-Webster dictionary" /></a>
                                <a target="_blank"  href="http://www.macmillandictionary.com/"><MenuItem primaryText="MacMillan dictionary" /></a>
                                <a target="_blank"  href="http://www.collinsdictionary.com/"><MenuItem primaryText="Collins dictionary" /></a>
                                <a target="_blank"  href="http://dictionary.cambridge.org/"><MenuItem primaryText="Cambridge dictionary" /></a>
                                <a target="_blank"  href="http://www.thefreedictionary.com/"><MenuItem primaryText="The Free Dictionary dictionary" /></a>
                                <a target="_blank"  href="http://www.wordreference.com/"><MenuItem primaryText="Wordreference" /></a>
                                <a target="_blank"  href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page"><MenuItem primaryText="Wiktionary" /></a>
                                <a target="_blank"  href="http://www.multitran.ru/"><MenuItem primaryText="Multitran" /></a>
                            </Menu>
                    </Col>

                </Row>
            </div>
        );
    }
});

export default Home;