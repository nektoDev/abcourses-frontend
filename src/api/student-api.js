import store from '../store';
import axios from 'axios';
import { getStudentSuccessAction } from '../actions/student-actions';

export function getStudent(studentId) {
    axios.get('http://localhost:8080/api/student/' + studentId)
        .then(response => {
            var studentAction = getStudentSuccessAction(response.data);
            store.dispatch(studentAction);
            return studentAction;
        });
}
