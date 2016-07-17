import store from '../store';
import axios from 'axios';
import {getStudentSuccessAction} from '../actions/student-actions';
import {getProgressSuccessAction} from '../actions/progress-actions';

export function getStudent(studentId) {
    axios.get('http://localhost:8080/api/student/' + studentId)
        .then(response => {
            var studentAction = getStudentSuccessAction(response.data);
            store.dispatch(studentAction);
            return studentAction;
        });
}

export function getProgress(studentId) {
    axios.get('http://localhost:8080/api/student/progress/' + studentId)
        .then(response => {
            let progress = [];
            response.data.map(d => {
                let values = [];
                d.values.map(v => {
                    values.push({x: v.date, y: v.value})
                });
                progress.push({name: d.name, values: values});
                console.log(progress)
            });
            progress.map(m => m.values = _.sortBy(m.values, function (o) {
                return o.x;
            }));
            var action = getProgressSuccessAction(progress);
            store.dispatch(action);
            return action;
        });
}

