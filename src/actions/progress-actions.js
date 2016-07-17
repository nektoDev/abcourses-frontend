import * as Actions from "./action-types";

export function getProgressSuccessAction(progress) {
    return {
        type: Actions.GET_PROGRESS,
        progress
    }
}