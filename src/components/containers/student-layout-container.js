import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';

import {getStudent} from '../../api/student-api';

import StudentLayout from '../layouts/student-layout/student-layout';

const StudentContainer = React.createClass({

    componentWillMount: function () {
        getStudent(this.props.params.student);
    },

    render: function() {
        return <StudentLayout {...this.props}/>;
    }
});

const mapStateToProps = function(store) {
    return {
        student: store.studentStore.student,
    };
};

export default connect(mapStateToProps)(StudentContainer);
