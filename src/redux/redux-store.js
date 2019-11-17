import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'
import navbarReduser from './navbar-reduser'
import findFriendsReduser from "./find-friends-reduser";
import appReduser from './app-reduser'
import authReduser from "./auth-reduser";
import thunkMiddleeware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReduser,
    messagesPage: dialogsReduser,
    navbar: navbarReduser,
    findFriends: findFriendsReduser,
    auth: authReduser,
    app: appReduser,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleeware))

window.store = store

export default store