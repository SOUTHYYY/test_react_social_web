import { AuthAPI } from '../../API/api'
import { stopSubmit } from 'redux-form'
import {SET_USER_DATA} from './auth-consts'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFretching: false,
}

let authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}


export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })

export const OnSetAuthUserData = () => async (dispatch) => {
    let response = await AuthAPI.getAuthUserData()
    if (response.resultCode === 0) {
        let { id, login, email } = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe = true) => async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(OnSetAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Упс... что-то пошло не так...'
        dispatch(stopSubmit('login', { _error: message }))
    }
}

export const logout = () => async (dispatch) => {
    let response = await AuthAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReduser