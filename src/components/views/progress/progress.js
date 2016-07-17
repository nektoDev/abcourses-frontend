import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid, Row, Col} from 'react-flexgrid';
import {Link} from 'react-router';

const Progress = React.createClass({
    render: function () {
        return (
            <div>
                <Row>
                    <Col lg={10} sm={12} md={10}>
                        TEST
                    </Col>
                    <Col lg={2} sm={12} md={2}>
                         TEST
                    </Col>
                </Row>
            </div>
        );
    }
});

export default Progress;