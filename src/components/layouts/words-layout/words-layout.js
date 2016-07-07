import React, {Component} from 'react';
import {Row, Col} from 'react-flexgrid';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

export default function (props) {
    return (
        <div className="words-layout">
            {props.children}
            <Row>
                <Col lg={6} xs={12} sm={6} md={6}>
                    <FlatButton
                        label="Retry"
                        style={{width: "100%"}}
                        backgroundColor="rgba(0,0,0, 0.05)"
                        hoverColor="rgba(0,0,0, 0.15)"
                        icon={<FontIcon className="material-icons" color="rgba(255, 255, 255, 0.870588)">shuffle</FontIcon>}
                        onClick={props.retryHandler.bind(this, props.taskType, props.student)}
                    />
                </Col>
                <Col lg={6} xs={12} sm={6} md={6}>
                    <FlatButton
                        label="Remove checked"
                        backgroundColor="rgba(0,0,0, 0.05)"
                        hoverColor="rgba(0,0,0, 0.15)"
                        style={{width: "100%"}}
                        icon={<FontIcon className="material-icons" color="rgba(255, 255, 255, 0.870588)">clear_all</FontIcon>}
                        onClick={props.removeCheckedHandler}
                    />
                </Col>
            </Row>
        </div>
    );
}