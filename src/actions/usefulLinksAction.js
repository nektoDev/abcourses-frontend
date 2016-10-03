import {API_LIST_LINKS_SUCCESS} from './const';
import axios from 'axios';
let config = require('config');
var jsonrpc = require('jsonrpc-lite');

function listLinksCreator(parameter) {
  return {type: API_LIST_LINKS_SUCCESS, parameter};
}

export function listLinks(dispatch) {
  return () => {
    axios.post(config.default.apiHost + 'service', jsonrpc.request('1', 'listUsefulLinks'))
      .then(response => {
        var parsed = jsonrpc.parseObject(response.data);

        if (parsed.type == "success") {
          var action = listLinksCreator(parsed.payload.result);
          dispatch(action);
        }
        return action;
      });
  };
}
