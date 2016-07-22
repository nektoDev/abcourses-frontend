import * as Actions from "./action-types";

export function getUsefulLinksAction(usefulLinks) {
    return {
        type: Actions.GET_USEFUL_LINKS,
        usefulLinks
    }
}