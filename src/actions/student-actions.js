import * as Actions from "./action-types";

export function getStudentSuccessAction(student) {
    return {
        type: Actions.GET_STUDENT,
        student
    }
}