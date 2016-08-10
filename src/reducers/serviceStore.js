import * as Action from '../actions/const';

const initialState = {
  showAppBar: false
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case Action.SHOW_APP_BAR: {
      return {...state, showAppBar: true};
    }

    case Action.HIDE_APP_BAR: {
      return {...state, showAppBar: false};
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
