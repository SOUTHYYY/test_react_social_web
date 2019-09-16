import { createStore, combineReducers } from "redux";
import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'
import navbarReduser from './navbar-reduser'
import findFriendsReduser from "./find-friends-reduser";
import authReduser from "./auth-reduser";

let reducers = combineReducers({
    profilePage: profileReduser,
    messagesPage: dialogsReduser,
    navbar: navbarReduser,
    findFriends: findFriendsReduser,
    auth: authReduser
})

let store = createStore(reducers)

window.store = store

export default store