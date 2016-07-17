import React from 'react';
import {Grid, Row, Col} from 'react-flexgrid';
import {LineChart} from 'rd3';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {lightGreenA100, lightBlue500} from 'material-ui/styles/colors';

var moment = require('moment');

const Progress = React.createClass({
    render: function () {
        if (typeof this.props.progress === 'undefined' || this.props.progress.length == 0
            || Object.keys(this.props.progress).length === 0) {
            return null;
        }

        return (
            <div>
                <Row>
                    <Col lg={12} sm={12} md={12} style={{fontSize:"70%"}}>
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
                            legendOffset={200}
                            domain={{x: [,], y: [0,100]}}
                            gridHorizontal={true}
                            gridVertical={true}
                            xAxisTickInterval={{unit: 'week', interval: 2}}

                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12} md={6}>
                        <Col xs={12}>
                            <h2>Test results</h2>
                            <Table displayRowCheckbox={false}>
                                <TableBody displayRowCheckbox={false}>
                                    <TableRow>
                                        <TableRowColumn>Date</TableRowColumn>
                                        <TableRowColumn>Score</TableRowColumn>
                                    </TableRow>
                                    {getTest(this.props.data)}
                                </TableBody>
                            </Table>
                        </Col>
                        <Col xs={12}>
                        <h2>Best results [{getBestCount(this.props.data)}]</h2>
                        <Table displayRowCheckbox={false}>
                            <TableBody displayRowCheckbox={false}>
                                <TableRow>
                                    <TableRowColumn>Date</TableRowColumn>
                                    <TableRowColumn>Pronunciation</TableRowColumn>
                                    <TableRowColumn>Vocabulary</TableRowColumn>
                                </TableRow>
                                {getBest(this.props.data)}
                            </TableBody>
                        </Table>
                        </Col>
                    </Col>
                    <Col lg={6} sm={12} md={6}>
                        <h2>Progress data</h2>
                        <Table displayRowCheckbox={false}>
                            <TableBody displayRowCheckbox={false}>
                                <TableRow>
                                    <TableRowColumn>Date</TableRowColumn>
                                    <TableRowColumn>Pronunciation</TableRowColumn>
                                    <TableRowColumn>Vocabulary</TableRowColumn>
                                    <TableRowColumn>Test</TableRowColumn>
                                </TableRow>
                                {getRows(this.props.data)}
                            </TableBody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
});

function getTest(data) {
    return (
        data.map((d) => {
            if (typeof d.test !== 'undefined') {
                return (
                    <TableRow key={"row-"+d.date}>
                        <TableRowColumn key={"date-"+d.date}>{moment(d.date).format("Do MMMM YYYY")}</TableRowColumn>
                        <TableRowColumn key={"test-"+d.date}>{d.test}</TableRowColumn>
                    </TableRow>
                )
            }
        })
    )
}

function getBest(data) {
    return (
        data.map((d) => {
            if (d.pronunciation == 100 && d.vocabulary == 100) {
                return (
                    <TableRow key={"row-"+d.date}>
                        <TableRowColumn key={"date-"+d.date}>{moment(d.date).format("Do MMMM YYYY")}</TableRowColumn>
                        <TableRowColumn key={"pron-"+d.date}>{d.pronunciation}</TableRowColumn>
                        <TableRowColumn key={"voc-"+d.date}>{d.vocabulary}</TableRowColumn>
                    </TableRow>
                )
            }
        })
    )
}

function getBestCount(data) {
    let count = 0;
    data.map((d) => {
        if (d.pronunciation == 100 && d.vocabulary == 100) {
            count++;
        }
    });

    return count;
}


function getRows(data) {
    return (
        data.map((d) => {
            return (
                <TableRow key={"row-"+d.date}
                          style={(d.pronunciation == 100 && d.vocabulary == 100) ? {backgroundColor: lightGreenA100} : ''}>
                    <TableRowColumn key={"date-"+d.date}>{moment(d.date).format("Do MMMM YYYY")}</TableRowColumn>
                    <TableRowColumn key={"pron-"+d.date}>{d.pronunciation}</TableRowColumn>
                    <TableRowColumn key={"voc-"+d.date}>{d.vocabulary}</TableRowColumn>
                    <TableRowColumn key={"test-"+d.date}>{d.test}</TableRowColumn>
                </TableRow>
            )
        })
    )
}

export default Progress;