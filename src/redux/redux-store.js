import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReduser from './profile-redux/profile-reducer'
import dialogsReduser from './dialogs-redux/dialogs-reducer'
import navbarReduser from './navbar-redux/navbar-reducer'
import findFriendsReduser from "./find-friends-redux/find-friends-reducer";
import appReduser from './app-redux/app-reducer'
import authReduser from "./auth-redux/auth-reducer";
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