const initialState = {
    showNav: true
};

const NavReducer = function(state = initialState, action) {
    switch(action.type) {
        case "TOGGLE_NAV":
            return Object.assign({}, state, {
                showNav: !state.showNav
            });
        case "HIDE_NAV":
            return Object.assign({}, state, {
                showNav: false
            });
        case "SHOW_NAV":
            return Object.assign({}, state, {
                showNav: true
            });
    }
    return state;
};

export default NavReducer;