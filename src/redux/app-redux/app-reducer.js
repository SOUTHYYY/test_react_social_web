import { OnSetAuthUserData } from '../auth-redux/auth-reducer'
import {INITIALIZED_SUCCES} from './app-consts'

let initialState = {
    initialized: false
}

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}
export const initializedSucces = () => ({ type: INITIALIZED_SUCCES })
export const initializeApp = () => async dispatch => {
    await dispatch(OnSetAuthUserData())
    
    dispatch(initializedSucces())
}

export default appReduser