import React, {Component} from 'react';
import {Row, Col} from 'react-flexgrid';
import StudentHome from '../../views/student-home/index';
import {Link} from 'react-router';

export default function (props) {
    return (
        <div className="student-layout">
            <Row fluid="true">
                <Col sm={12} xs={12} md={12} lg={12}>
                    <h1><Link className="link-not-link" to={"/"+props.student.id}>{props.student.name}</Link></h1>
                </Col>
            </Row>
            {props.children || <StudentHome {...props}/>}
        </div>
    );
}