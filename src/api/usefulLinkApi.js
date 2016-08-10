import axios from 'axios';

const usefulLinksActions = require('../actions/usefulLinks/listLinks');
import store from '../stores';

const links = [
  {name: 'Oxford dictionary', url: 'https://www.oxfordlearnersdictionaries.com/', checked:true},
  {name: 'Forvo', url: 'http://ru.forvo.com/', checked:true},
  {name: 'Academic translate', url: 'http://translate.academic.ru/', checked:true},
  {name: 'Merriam-Webster dictionary', url: 'http://www.merriam-webster.com/'},
  {name: 'MacMillan dictionary', url: 'http://www.macmillandictionary.com/'},
  {name: 'Collins dictionary', url: 'http://www.collinsdictionary.com/'},
  {name: 'Cambridge dictionary', url: 'http://dictionary.cambridge.org/'},
  {name: 'The Free Dictionary dictionary', url: 'http://www.thefreedictionary.com/'},
  {name: 'Wordreference', url: 'http://www.wordreference.com/'},
  {name: 'Wiktionary', url: 'https://en.wiktionary.org/wiki/Wiktionary:Main_Page'},
  {name: 'Multitran', url: 'http://www.multitran.ru/'},
]

export function listUsefulLinks() {
  var action = usefulLinksActions.listLinks(links);
  // store.dispatch(action);
  return action;

  /*  axios.get('http://newenglish.nektodev.ru:8085/api/service/usefulLinks')
      .then(response => {
        var action = getUsefulLinksAction(response.data);
        store.dispatch(action);
        return action;
      });*/
}
