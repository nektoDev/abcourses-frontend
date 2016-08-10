import React, {
  Component,
  PropTypes
} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ProgressComponent from '../components/ProgressComponent';
var moment = require('moment');

var progressDataMap = {};

class Progress extends Component {

  componentWillMount() {
    if (this.props.student.id)
      this.props.actions.getStudentProgress(this.props.student.id);
    else {
      this.props.actions.getStudent(this.props.params.student);
      this.props.actions.getStudentProgress(this.props.params.student);
    }
  }

  render() {
    const {actions, student, progress, progressData} = this.props;
    return <ProgressComponent actions={actions} student={student} progress={progress} progressData={progressData}
                              progressDataMap={progressDataMap}/>;
  }
}

function convertProgressData(progress) {
  if (typeof progress === 'undefined' || progress.length == 0
    || Object.keys(progress).length === 0) {
    return null;
  }

  progressDataMap = {};

  let progressData = {
    labels: [],
    datasets: []
  };
  let vocData = {
    label: 'Vocabulary',
    backgroundColor: 'rgba(99,132,255,0.0)',
    borderColor: 'rgba(99,132,255,1)',
    borderWidth: 1,
    pointRadius: 1,
    hoverBackgroundColor: 'rgba(99,132,255,0.4)',
    hoverBorderColor: 'rgba(99,132,255,1)',
    data: []
  };
  let pronData = {
    label: 'Pronunciation',
    backgroundColor: 'rgba(255,132,99,0.0)',
    borderColor: 'rgba(255,132,99,1)',
    borderWidth: 1,
    pointRadius: 1,
    hoverBackgroundColor: 'rgba(255,132,99,0.4)',
    hoverBorderColor: 'rgba(255,132,99,1)',
    data: []
  };
  let testData = {
    label: 'Test',
    backgroundColor: 'rgba(99,255,99,0.0)',
    borderColor: '#81C784',
    borderWidth: 2,
    pointRadius: 1,
    hoverBackgroundColor: 'rgba(99,255,99,0.4)',
    hoverBorderColor: '#4CAF50',
    showLine: true,
    spanGaps: true,
    data: []
  };

  progress.map(data => {
    data.values.map(v => {
      progressDataMap[v.date] = progressDataMap[v.date] || {};
      progressDataMap[v.date][data.name] = progressDataMap[v.date][data.name] || {};
      progressDataMap[v.date][data.name] = v.value;
    });
  });

  Object.keys(progressDataMap).map(key => {
    vocData.data.push(progressDataMap[key].Vocabulary);
    pronData.data.push(progressDataMap[key].Pronunciation);
    testData.data.push(progressDataMap[key].Test);
  });

  progressData.labels = Object.keys(progressDataMap);
  progressData.datasets.push(vocData);
  progressData.datasets.push(pronData);
  progressData.datasets.push(testData);

  for (var i = 0; i < progressData.labels.length; i++) {
    progressData.labels[i] = moment(Number(progressData.labels[i])).format('DD MMM YY');
  }
  return progressData;
}

Progress.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    student: state.studentsStore.student,
    progress: state.studentsStore.progress,
    progressData: convertProgressData(state.studentsStore.progress)
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  actionMap.actions.getStudent = require('../actions/studentsActions.js').getStudent(dispatch);
  actionMap.actions.getStudentProgress = require('../actions/studentsActions.js').getStudentProgress(dispatch);
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
