import store from '../store';
import axios from 'axios';
import {getUsefulLinksAction} from "../actions/service-actions";

const links = [
    {name: "Oxford dictionary", url: "https://www.oxfordlearnersdictionaries.com/"},
    {name: "Forvo", url: "http://ru.forvo.com/"},
    {name: "Academic translate", url: "http://translate.academic.ru/"},
    {name: "Merriam-Webster dictionary", url: "http://www.merriam-webster.com/"},
    {name: "MacMillan dictionary", url: "http://www.macmillandictionary.com/"},
    {name: "Collins dictionary", url: "http://www.collinsdictionary.com/"},
    {name: "Cambridge dictionary", url: "http://dictionary.cambridge.org/"},
    {name: "The Free Dictionary dictionary", url: "http://www.thefreedictionary.com/"},
    {name: "Wordreference", url: "http://www.wordreference.com/"},
    {name: "Wiktionary", url: "https://en.wiktionary.org/wiki/Wiktionary:Main_Page"},
    {name: "Multitran", url: "http://www.multitran.ru/"},
]

export function getUsefulLinks() {
    var action = getUsefulLinksAction(links);
    store.dispatch(action);
    return action;
}