import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';

import StudentLayout from '../layouts/student-layout/student-layout';
import { getWords, TASK_TYPE } from '../../api/word-api';

const mapStateToProps = function(store) {
    return {
        student: "Aydar",
    };
};

export default connect(mapStateToProps)(StudentLayout);
