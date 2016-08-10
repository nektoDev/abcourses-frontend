import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CheckWordsLayoutComponent from '../components/CheckWordsLayoutComponent';

class CheckWordsLayout extends Component {
  render() {
    const {actions, children} = this.props;
    return <CheckWordsLayoutComponent actions={actions} children={children}/>;
  }
}

CheckWordsLayout.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    retry: require('../actions/checkWordsActions').retryAction,
    removeChecked: require('../actions/checkWordsActions').removeCheckedAction
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckWordsLayout);
