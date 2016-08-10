import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CheckPronunciationComponent from '../components/CheckPronunciationComponent';
import {TASK_TYPE} from '../actions/checkWordsActions'

class CheckPronunciation extends Component {
  loadWords() {
    if (this.props.student && this.props.student.id)
      this.props.actions.getCheckWords(TASK_TYPE.PRONUNCIATION, this.props.student.id);
    else {
      this.props.actions.getStudent(this.props.params.student);
      this.props.actions.getCheckWords(TASK_TYPE.PRONUNCIATION, this.props.params.student);
    }
  }

  componentWillMount() {
    this.props.actions.showAppBar();
    this.loadWords();
  }

  componentWillUnmount() {
    this.props.actions.hideAppBar();
  }

  componentDidUpdate(prevProps) {
    let oldId = prevProps.student.id;
    let newId = this.props.student.id;
    if (newId !== oldId)
      this.loadWords();
  }

  render() {
    const {actions, words, student} = this.props;
    return <CheckPronunciationComponent actions={actions} words={words} student={student}/>;
  }
}

CheckPronunciation.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    words: state.checkWordsStore.words,
    student: state.studentsStore.student
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    showAppBar: require('../actions/serviceActions.js').showAppBarAction,
    hideAppBar: require('../actions/serviceActions.js').hideAppBarAction
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  actionMap.actions.getStudent = require('../actions/studentsActions.js').getStudent(dispatch);
  actionMap.actions.getCheckWords = require('../actions/checkWordsActions.js').getCheckWords(dispatch);
  actionMap.actions.toggleAnswerStateAction = require('../actions/checkWordsActions.js').toggleAnswerStateAction(dispatch);

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckPronunciation);
