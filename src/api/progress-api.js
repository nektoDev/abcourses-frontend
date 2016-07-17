import store from '../store';
import axios from 'axios';
import {getProgressSuccessAction} from '../actions/progress-actions';

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

export function getProgress(student) {
    progress[0].values = _.sortBy(progress[0].values, function(o) { console.log(o.x); return o.x; });
    let progressAction = getProgressSuccessAction(progress);
    store.dispatch(progressAction);
    return progressAction;
    //
    // axios.get('http://localhost:8080/api/student/' + studentId)
    //     .then(response => {
    //         var studentAction = getStudentSuccessAction(response.data);
    //         store.dispatch(studentAction);
    //         return studentAction;
    //     });
}
