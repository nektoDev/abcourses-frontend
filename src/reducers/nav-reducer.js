import * as Actions from '../actions/action-types'
var div = {
    id: 1,
    title: "Slava&Daria",
    url: "/div",
    pages: [
        {
            id: 11,
            url: "/vocabulary/div",
            title: "Vocabulary",
            subtitle: "Try to remember all the words",
            picture: "http://lorempixel.com/600/400/nature/1"
        },
        {
            id: 12,
            url: "/pronunciation/slava",
            title: "Slava's Pronunciation",
            subtitle: "Good luck!",
            picture: "http://lorempixel.com/600/400/nature/2"
        },
        {
            id: 13,
            url: "/pronunciation/dasha",
            title: "Dasha's Pronunciation",
            subtitle: "Good luck!",
            picture: "http://lorempixel.com/600/400/nature/3"
        }
    ]
};
var aiy = {
    id: 2,
    title: "Aydar&Yulia",
    url: "/aiy",
    pages: [
        {
            id: 21,
            url: "/vocabulary/aiy",
            title: "Vocabulary",
            subtitle: "Try to remember all the words",
            picture: "http://lorempixel.com/600/400/nature/4"
        },
        {
            id: 22,
            url: "/pronunciation/aydar",
            title: "Aydar's Pronunciation",
            subtitle: "Good luck!",
            picture: "http://lorempixel.com/600/400/nature/5"
        },
        {
            id: 23,
            url: "/pronunciation/yulia",
            title: "Yulia's Pronunciation",
            subtitle: "Good luck!",
            picture: "http://lorempixel.com/600/400/nature/6"
        }
    ]
};

const initialState = {
    showNav: false,
    navigation: [
        div,
        aiy
    ]
};

const NavReducer = function(state = initialState, action) {
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
        case Actions.GET_NAVIGATION:
            return Object.assign({}, state, {
                navigation: action.structure.navigation
            });
    }
    return state;
};

export default NavReducer;



