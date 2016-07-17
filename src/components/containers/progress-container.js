import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';

import { getProgress } from '../../api/progress-api';
import Progress from '../views/progress/progress';

const ProgressContainer = React.createClass({

    componentWillMount: function () {
        getProgress(this.props.params.student);
    },

    render: function() {
        return <Progress {...this.props}/>;
    }
});

const mapStateToProps = function(store) {
    return {
        student: store.studentStore.student,
        progress: store.progressStore.progress,
    };
};

export default connect(mapStateToProps)(ProgressContainer);
