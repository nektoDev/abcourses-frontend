'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',
  apiHost: 'http://localhost:8080/api/'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
