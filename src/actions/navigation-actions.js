import {GET_NAVIGATION} from "./action-types";

export function getNavigationSuccessAction(structure) {
    return {
        type: GET_NAVIGATION,
        structure
    }
}