import store from '../store';
import axios from 'axios';
import {getProgressSuccessAction} from '../actions/progress-actions';
import {getStudent} from './student-api';

/*
let progress = [{
        name: "slava",
        values: [
            {
                x: 1468702331631,
                y: 92
            },
            {
                x: 1468701123631,
                y: 97
            },
            {
                x: 1468707172131,
                y: 91
            },
            {
                x: 1468701134431,
                y: 99
            },
            {
                x: 1468708131531,
                y: 98
            },
            {
                x: 1468701631621,
                y: 82
            }
        ]
    }]
*/

export function getProgress(studentId) {
    axios.get('http://localhost:8080/api/student/' + studentId)
        .then(response => {
            axios.get('http://localhost:8080/api/progress/' + response.data.progressName)
                .then(response => {
                    let progress = [];
                    response.data.data.map( d => {
                        let values = [];
                        d.values.map(v => {
                            values.push({x: v.date, y: v.value})
                        });
                        progress.push({name: d.name, values: values});
                    });
                    progress.map(m => m.values = _.sortBy(m.values, function(o) { return o.x; }));
                    var action = getProgressSuccessAction(progress);
                    store.dispatch(action);
                    return action;

                });
        });
    
}
