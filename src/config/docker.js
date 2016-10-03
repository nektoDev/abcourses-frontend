'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'docker',
  apiHost: 'http://localhost:8081/api/'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
