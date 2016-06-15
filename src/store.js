import { createStore } from 'redux';
import {responsiveStoreEnhancer} from 'redux-responsive'

import reducers from './reducers';

const store = createStore(reducers,responsiveStoreEnhancer);
export default store;