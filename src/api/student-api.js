import store from '../store';
import axios from 'axios';
import { getStudentSuccessAction } from '../actions/student-actions';

export function getStudent(studentId) {
    axios.get('http://localhost:8085/student/' + studentId)
        .then(response => {
            var studentAction = getStudentSuccessAction(response.data);
            store.dispatch(studentAction);
            return studentAction;
        });
}
