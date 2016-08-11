import {API_LIST_LINKS_SUCCESS} from './const';
import axios from 'axios';
let config = require('config');

function listLinksCreator(parameter) {
  return {type: API_LIST_LINKS_SUCCESS, parameter};
}

export function listLinks(dispatch) {
  return () => {
    axios.get(config.default.apiHost + 'service/usefulLinks')
      .then(response => {
        var action = listLinksCreator(response.data);
        dispatch(action);
        return action;
      });
  };
}
