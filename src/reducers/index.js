/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';
import CheckWordsReducer from '../reducers/checkWordsStore';
const reducers = {
  browser: responsiveStateReducer,
  usefulLinks: require('../reducers/usefulLinks.js'),
  studentsStore: require('../reducers/studentsStore.js'),
  checkWordsStore: CheckWordsReducer,
  serviceStore: require('../reducers/serviceStore.js')
};
module.exports = combineReducers(reducers);
