import { UsersAPI } from '../API/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { id: 3, message: "Я в лазурном", date: '24 авг в 12:30', likesCount: 1},
        { id: 2, message: "It's my first post", date: '30 июл в 19:01', likesCount: 15 },
        { id: 1, message: "Hello everybody", date: '30 июл в 19:00', likesCount: 3 },
    ],
    newPostText: '',
    postAuthor: 'Лаптырев Алексей',
    profile: null
}

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const months = {
                0: 'янв',
                1: 'фев',
                2: 'мар',
                3: 'апр',
                4: 'мая',
                5: 'июн',
                6: 'июл',
                7: 'авг',
                8: 'сен',
                9: 'окт',
                10:'ноя',
                11:'дек'
              }
            let date = new Date()
            const days = date.getDate()
            const mouthIndex = date.getMonth()
            const monthName = months[mouthIndex]
            const hours = date.getHours()
            const minutes = date.getMinutes()
            let currentDate =  `${days} ${monthName} в ${hours}:${minutes}`
            debugger
            let newPost = {
                id: state.posts.lenght + 1,
                date: currentDate,
                message: state.newPostText,
                likeCount: 0,
            }
            debugger
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

export const addPost = () => ({ type: ADD_POST})
export const updateNewPostText = (text) =>
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