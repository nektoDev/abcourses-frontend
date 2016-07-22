import * as Actions from '../actions/action-types'

const initialState = {
    showNav: false,
    showAppBar: false,
};

const ServiceReducer = function(state = initialState, action) {
    switch(action.type) {
        case Actions.TOGGLE_NAV:
            return Object.assign({}, state, {
                showNav: !state.showNav
            });
        case Actions.HIDE_NAV:
            return Object.assign({}, state, {
                showNav: false
            });
        case Actions.SHOW_NAV:
            return Object.assign({}, state, {
                showNav: true
            });
        case Actions.SHOW_APPBAR: 
            return Object.assign({}, state, {
                showAppBar: true
            });
        case Actions.HIDE_APPBAR:
            return Object.assign({}, state, {
                showAppBar: false
            });
        case Actions.GET_USEFUL_LINKS:
            return Object.assign({}, state, {
                usefulLinks: action.usefulLinks
            });
    }
    return state;
};

export default ServiceReducer;



