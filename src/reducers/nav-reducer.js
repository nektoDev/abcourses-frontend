import * as Actions from '../actions/action-types'
var div = {
    id: 1,
    title: "Slava&Daria",
    url: "/slava",
    pages: [
        {
            id: 11,
            url: "/slava/vocabulary",
            title: "Vocabulary",
            subtitle: "Try to remember all the words",
            picture: "http://lorempixel.com/600/400/nature/1"
        },
        {
            id: 12,
            url: "/slava/pronunciation",
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
            url: "/aydar/vocabulary",
            title: "Vocabulary",
            subtitle: "Try to remember all the words",
            picture: "http://lorempixel.com/600/400/nature/4"
        },
        {
            id: 22,
            url: "/aydar/pronunciation",
            title: "Aydar's Pronunciation",
            subtitle: "Good luck!",
            picture: "http://lorempixel.com/600/400/nature/5"
        },
        {
            id: 23,
            url: "/yulia/pronunciation",
            title: "Yulia's Pronunciation",
            subtitle: "Good luck!",
            picture: "http://lorempixel.com/600/400/nature/6"
        }
    ]
};

const initialState = {
    showNav: false,
    showAppBar: false,
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
        case Actions.SHOW_APPBAR: 
            return Object.assign({}, state, {
                showAppBar: true
            });
        case Actions.HIDE_APPBAR:
            return Object.assign({}, state, {
                showAppBar: false
            });
        case Actions.GET_NAVIGATION:
            return Object.assign({}, state, {
                navigation: action.structure.navigation
            });
    }
    return state;
};

export default NavReducer;



