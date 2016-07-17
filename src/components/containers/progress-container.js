import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import {getProgress} from '../../api/student-api'
import _ from 'lodash';

import Progress from '../views/progress/progress';

const ProgressContainer = React.createClass({

    componentWillMount: function () {
        getProgress(this.props.params.student);
    },

    render: function() {
        return <Progress {...this.props} data={getProgressDataRows(this.props.progress)}/>;
    }
});

function getProgressDataRows(progress) {
    
    let result = [];
    progress.map((wrap) => {
        if (wrap.name === "Pronunciation") {
            wrap.values.map(val => {
                var index = _.findIndex(result, function(r) { return r.date == val.x; });
                if (index > 0) {
                    result[index].pronunciation=val.y;
                } else {
                    result.push({date: val.x, pronunciation: val.y});
                }
            })
        }
        if (wrap.name === "Vocabulary") {
            wrap.values.map(val => {
                var index = _.findIndex(result, function(r) { return r.date == val.x; });
                if (index > 0) {
                    result[index].vocabulary=val.y;
                } else {
                    result.push({date: val.x, vocabulary: val.y});
                }
            })
        }
        if (wrap.name === "Test") {
            wrap.values.map(val => {
                var index = _.findIndex(result, function(r) { return r.date == val.x; });
                if (index > 0) {
                    result[index].test=val.y;
                } else {
                    result.push({date: val.x, test: val.y});
                }
            })
        }
    });
    result = _.sortBy(result, function (o) {
        return o.date;
    })

    return result;
}

const mapStateToProps = function(store) {
    return {
        student: store.studentStore.student,
        progress: store.studentStore.progress
    };
};

export default connect(mapStateToProps)(ProgressContainer);
