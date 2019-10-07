import { UsersAPI } from '../API/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { id: 3, message: "Я в лазурном", likesCount: 1 },
        { id: 2, message: "It's my first post", likesCount: 15 },
        { id: 1, message: "Hello everybody", likesCount: 3 },
    ],
    newPostText: '',
    postAuthor: 'Лаптырев Алексей',
    profile: null
}

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.lenght + 1,
                message: state.newPostText,
                likeCount: 0,
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile

            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile})

export const  setUserProfile = (userId) => {
    return (dispatch => {
        UsersAPI.getUserProfile(userId)
        .then(profile => {
            dispatch(setUserProfileSuccess(profile))
        })
    })
}

export default profileReduser