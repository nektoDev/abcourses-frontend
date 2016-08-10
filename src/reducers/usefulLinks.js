import * as Action from '../actions/const';

const initialState = {
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    case Action.API_LIST_LINKS_SUCCESS: {
      return {...state, links: action.parameter };
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
