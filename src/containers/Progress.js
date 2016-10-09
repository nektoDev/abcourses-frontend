import React, {
  Component,
  PropTypes
} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ProgressComponent from '../components/ProgressComponent';
var moment = require('moment');

class Progress extends Component {

  componentWillMount() {
    if (this.props.student && this.props.student.id && this.props.student.id == this.props.params.student) {
      this.props.actions.getStudentProgress(this.props.params.student);
      this.props.actions.getStudentProgressChart(this.props.params.student);
    } else {
      this.props.actions.getStudent(this.props.params.student);
      this.props.actions.getStudentProgress(this.props.params.student);
      this.props.actions.getStudentProgressChart(this.props.params.student);
    }
  }

  render() {
    const {actions, student, progress, progressData, progressDataMap} = this.props;
    return <ProgressComponent actions={actions} student={student} progress={progress} progressData={progressData}
                              progressDataMap={progressDataMap}/>;
  }
}

function convertProgressData(progress) {
  if (typeof progress === 'undefined' || progress.length == 0
    || Object.keys(progress).length === 0) {
    return null;
  }

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

  Object.keys(progress).map(key => {
    vocData.data.push(progress[key].vocabulary);
    pronData.data.push(progress[key].pronunciation);
    testData.data.push(progress[key].test);
  });

  progressData.labels = Object.keys(progress);
  progressData.datasets.push(vocData);
  progressData.datasets.push(pronData);
  progressData.datasets.push(testData);

  for (var i = 0; i < progressData.labels.length; i++) {
    progressData.labels[i] = moment(progressData.labels[i]).format('DD MMM YY');
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
    progressDataMap: state.studentsStore.progressChartDateValuesMap,
    progressData: convertProgressData(state.studentsStore.progressChartDateValuesMap)
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  actionMap.actions.getStudent = require('../actions/studentsActions.js').getStudent(dispatch);
  actionMap.actions.getStudentProgress = require('../actions/studentsActions.js').getStudentProgress(dispatch);
  actionMap.actions.getStudentProgressChart = require('../actions/studentsActions.js').getStudentProgressChart(dispatch);
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
