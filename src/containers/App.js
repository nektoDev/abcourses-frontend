import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';

class App extends Component {
  componentDidMount() {
    if (!this.props.usefulLinks.links || this.props.usefulLinks.links.length == 0)
      this.props.actions.listLinks();
  }
  render() {
    const {actions, usefulLinks, children, serviceStore, words, student} = this.props;
    return (
      <Main
        actions={actions}
        children={children}
        usefulLinks={usefulLinks}
        serviceStore={serviceStore}
        words={words}
        student={student}
      />
    );
  }
}
App.propTypes = {
  actions: PropTypes.object.isRequired,
  usefulLinks: PropTypes.object.isRequired,
  serviceStore: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  const props = {
    isMobile: state.browser.lessThan.medium,
    usefulLinks: state.usefulLinks,
    serviceStore: state.serviceStore,
    words: state.checkWordsStore.words,
    student: state.studentsStore.student
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {
    listLinks: require('../actions/usefulLinksAction.js').listLinks,
    toggleAllAnswers: require('../actions/checkWordsActions.js').toggleAllAnswersAction,
    shuffle: require('../actions/checkWordsActions.js').shuffleAction,
    removeChecked: require('../actions/checkWordsActions.js').removeCheckedAction
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
