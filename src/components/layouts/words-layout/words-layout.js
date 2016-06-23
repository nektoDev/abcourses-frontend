import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-flexgrid';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

export default function (props) {
    return (
        <div className="words-layout">
            <Row fluid="true">
                <Col sm={12} xs={12} md={12} lg={12}>
                    <h1>Pronunciation {props.params.student}</h1>
                </Col>
            </Row>
            {props.children}
            <Row>
                <Col lg={6} xs={12} sm={6} md={6}>
                    <FlatButton
                        label="Retry"
                        style={{width: "100%"}}
                        backgroundColor="rgba(0,0,0, 0.05)"
                        hoverColor="rgba(0,0,0, 0.15)"
                        icon={<FontIcon className="material-icons" color="rgba(255, 255, 255, 0.870588)">shuffle</FontIcon>}
                        onClick={props.shuffle}
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