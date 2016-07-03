import React, {Component} from 'react';
import {Row, Col} from 'react-flexgrid';

export default function (props) {
    return (
        <div className="student-layout">
            <Row fluid="true">
                <Col sm={12} xs={12} md={12} lg={12}>
                    <h1>{props.student}</h1>
                </Col>
            </Row>
            {props.children}
        </div>
    );
}