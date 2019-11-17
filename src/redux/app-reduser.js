import { OnSetAuthUserData } from './auth-reduser'
import { async } from 'q'

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES'

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
// export const initializeApp = () => async dispatch => {
//     let promise = dispatch(OnSetAuthUserData())
//     promise.then(() => {
//         dispatch(initializedSucces())
//     })
// }

export const initializeApp = () => async dispatch => {
    let promise = await dispatch(OnSetAuthUserData())
    
    dispatch(initializedSucces())
}

export default appReduser