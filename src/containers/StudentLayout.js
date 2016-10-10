import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StudentLayoutComponent from '../components/StudentLayoutComponent';

class StudentLayout extends Component {
  componentWillMount() {
    this.props.actions.getStudent(this.props.params.student);
    this.props.actions.getStudentStatistics(this.props.params.student);
  }

  render() {
    const {actions, student, children, studentStats, params} = this.props;
    return <StudentLayoutComponent actions={actions} params={params} student={student} studentStats={studentStats} children={children}/>;
  }
}

StudentLayout.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
      student: state.studentsStore.student,
      studentStats: state.studentsStore.studentStats
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {

  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  actionMap.actions.listStudents = require('../actions/studentsActions.js').listStudents(dispatch);
  actionMap.actions.getStudent = require('../actions/studentsActions.js').getStudent(dispatch);
  actionMap.actions.getStudentStatistics = require('../actions/studentsActions.js').getStudentStatistics(dispatch);
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentLayout);
