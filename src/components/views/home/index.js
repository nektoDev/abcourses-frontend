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
                                {getUsefulLinks(this.props.usefulLinks)}
                            </Menu>
                    </Col>

                </Row>
            </div>
        );
    }
});

function getUsefulLinks(usefulLinks) {

    if (typeof usefulLinks === 'undefined' || usefulLinks.length == 0) return null;
    return (
        <div>
            {usefulLinks.map((link) => {

                return link.checked ? <a target="_blank" className="link-not-link" href={link.url}><MenuItem primaryText={link.name}/></a> : null;
                }
            )}
        </div>
    )
}

export default Home;