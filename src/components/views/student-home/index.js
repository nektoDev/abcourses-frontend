import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid, Row, Col} from 'react-flexgrid';
import {Link} from 'react-router';
import vocabulary from '../../../img/vocabulary.jpg';
import pronunciation from '../../../img/pronunciation.jpg';
import progress from '../../../img/progress.jpg';

const StudentHome = React.createClass({
    render: function () {
        return (
            <div>
                <Row>
                    <Col lg={4} sm={12} md={4}>
                        <Link to={"/" + this.props.student.id + "/vocabulary"}>
                            <Card className="card" zDepth={2}>
                                <CardMedia overlay={<CardTitle title="Vocabulary" subtitle="Try to remember all the words!" />}>
                                    <img src={vocabulary}/>
                                </CardMedia>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={4} sm={12} md={4}>
                        <Link to={"/" + this.props.student.id + "/pronunciation"}>
                            <Card className="card" zDepth={2}>
                                <CardMedia overlay={<CardTitle title="Pronunciation" subtitle="Put a spoon on your tongue!" />}>
                                    <img src={pronunciation}/>
                                </CardMedia>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={4} sm={12} md={4}>
                        <Link to={"/" + this.props.student.id + "/progress"}>
                            <Card className="card" zDepth={2}>
                                <CardMedia overlay={<CardTitle title="Progress" subtitle="Put a spoon on your tongue!" />}>
                                    <img src={progress}/>
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