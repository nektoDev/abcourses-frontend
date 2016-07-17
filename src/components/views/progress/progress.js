import React from 'react';
import {Grid, Row, Col} from 'react-flexgrid';
import {LineChart} from 'rd3';

const Progress = React.createClass({
    render: function () {
        if (typeof this.props.progress === 'undefined'
            || Object.keys(this.props.progress).length === 0) {
            return null;
        }

        return (
            <div>
                <Row>
                    <Col lg={10} sm={12} md={10}>
                        <LineChart
                            data={this.props.progress}
                            width='100%'
                            height={400}
                            legend={true}
                            viewBoxObject={{x: 0,y: 0,width: 800,height: 400}}
                            title="Progress"
                            yAxisLabel="Progress"
                            xAxisLabel="Date"
                            xAccessor={(d)=> {return new Date(d.x);}}
                            domain={{x: [,], y: [0,100]}}
                            gridHorizontal={true}
                        />
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