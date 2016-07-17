import store from '../store';
import axios from 'axios';
import { getProgressSuccessAction } from '../actions/progress-actions';

var progress = {
    student: "slava",
    data: [
        {
            date: 1468701131631,
            value: 92
        },
        {
            date: 1468701133631,
            value: 97
        },
        {
            date: 1468701132131,
            value: 91
        },
        {
            date: 1468701131431,
            value: 99
        },
        {
            date: 1468701131531,
            value: 98
        },
        {
            date: 1468701131621,
            value: 82
        },
    ]
}


export function getProgress(student) {
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
