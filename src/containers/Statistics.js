import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StatisticsComponent from '../components/StatisticsComponent';

class Statistics extends Component {
  componentWillMount() {
    this.props.actions.getStudentStatistics(this.props.params.student);
  }

  render() {
    const {studentStats} = this.props;
    return <StatisticsComponent studentStats={studentStats}/>;
  }
}

Statistics.propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    studentStats: state.studentsStore.studentStats
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {

  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  actionMap.actions.getStudentStatistics = require('../actions/studentsActions.js').getStudentStatistics(dispatch);
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
