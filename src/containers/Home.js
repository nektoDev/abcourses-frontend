import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeComponent from '../components/HomeComponent';

class Home extends Component {

  componentDidMount() {
    let { usefulLinks, studentsStore, actions }= this.props;
    if (!usefulLinks.links || usefulLinks.links.length == 0) actions.listLinks();
    if (!studentsStore.students || studentsStore.students == 0) actions.listStudents();
  }

  render() {
    const { actions, studentsStore } = this.props;
    return (<div><div>{this.props.usefulLinks.length}</div><HomeComponent actions={actions} students={studentsStore.students} {...this.props}/></div>);
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  usefulLinks: PropTypes.object.isRequired,
  studentsStore: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    usefulLinks: state.usefulLinks,
    studentsStore: state.studentsStore
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {

  };
  let actionMap = { actions: bindActionCreators(actions, dispatch) };
  actionMap.actions.listStudents = require('../actions/studentsActions.js').listStudents(dispatch);
  actionMap.actions.listLinks = require('../actions/usefulLinksAction').listLinks(dispatch)
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
