import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'
import navbarReduser from './navbar-reduser'
import findFriendsReduser from "./find-friends-reduser";
import authReduser from "./auth-reduser";
import thunkMiddleeware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReduser,
    messagesPage: dialogsReduser,
    navbar: navbarReduser,
    findFriends: findFriendsReduser,
    auth: authReduser
})

let store = createStore(reducers, applyMiddleware(thunkMiddleeware))

window.store = store

export default store