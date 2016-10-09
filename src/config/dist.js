'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dist',  // feel free to remove the appEnv property here
  apiHost: 'http://newenglish.nektodev.ru:8081/api/'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
