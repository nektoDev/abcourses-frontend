import React from 'react';
import {Grid, Row, Col} from 'react-flexgrid';
import {LineChart} from 'rd3';

const Progress = React.createClass({
    render: function () {
        if (typeof this.props.progress === 'undefined' || this.props.progress.length == 0
            || Object.keys(this.props.progress).length === 0) {
            return null;
        }

        return (
            <div>
                <Row>
                    <Col lg={12} sm={12} md={12}>
                        <LineChart
                            data={this.props.progress}
                            width='100%'
                            height={400}
                            legend={true}
                            colors={d3.scale.category10()}
                            viewBoxObject={{x: 0,y: 0,width: 1500,height: 400}}
                            title="Progress"
                            yAxisLabel="Progress"
                            xAxisLabel="Date"
                            xAccessor={(d)=> {return new Date(d.x);}}
                            domain={{x: [,], y: [,100]}}
                            gridHorizontal={true}
                            xAxisTickInterval={{unit: 'week', interval: 3}}

                        />
                    </Col>
                </Row>
            </div>
        );
    }
});

export default Progress;