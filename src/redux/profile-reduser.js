import { ProfileAPI } from '../API/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const LIKE_IT = 'LIKE_IT'
const DONT_LIKE_IT = 'DONT_LIKE_IT'
const SET_COMMENT_MODE = 'SET_COMMENT_MODE'
const UPDATE_COMMENT_TEXT = 'UPDATE_COMMENT_TEXT'
const ADD_COMMENT = 'ADD_COMMENT'

let initialState = {
    posts: [
        { id: 3, message: "Я в лазурном", date: '24 авг в 12:30', likesCount: 1, isYouLike: false, commentMode: false, comments: [] },
        { id: 2, message: "It's my first post", date: '30 июл в 19:01', likesCount: 15, isYouLike: false, commentMode: false, comments: [] },
        { id: 1, message: "Hello everybody", date: '30 июл в 19:00', likesCount: 3, isYouLike: false, commentMode: false, comments: [] },
    ],
    pageInfoBar: [
        { name: "Друзей", count: 201, id: 1 },
        { name: "Подписчиков", count: 40, id: 2 },
        { name: "Треков", count: 1073, id: 3 },
        { name: "Фото", count: 1, id: 4 },
        { name: "Видеозаписей", count: 370, id: 5 }
    ],
    isFetching: false,
    followingInProgress: [],
    postAuthor: 'Лаптырев Алексей',
    profile: null,
    status: '',
    commentText: ''
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
                10: 'ноя',
                11: 'дек'
            }
            let date = new Date()
            const days = date.getDate()
            const mouthIndex = date.getMonth()
            const monthName = months[mouthIndex]
            const hours = date.getHours()
            let minutes = date.getMinutes()
            if (minutes < 10) {
                minutes = '0' + minutes
            }
            let currentDate = `${days} ${monthName} в ${hours}:${minutes}`
            let newPost = {
                id: state.posts.length + 1,
                date: currentDate,
                message: action.newPostText,
                likesCount: 1,
                commentMode: false,
                comments: [],
                isYouLike: false
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile

            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case LIKE_IT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        return { ...post, isYouLike: true, likesCount: post.likesCount++ }
                    }
                    return post
                })
            }
        case DONT_LIKE_IT:
            return {
                ...state,
                users: state.posts.map(post => {
                    if (post.id === action.userId) {
                        return { ...post, isYouLike: false, likesCount: post.likesCount-- }
                    }
                    return post
                })
            }
        case SET_COMMENT_MODE:
            return {
                ...state,
                users: state.posts.map(post => {
                    if (post.id === action.postId) {
                        return { ...post, commentMode: action.value }
                    }
                    return post
                })
            }
        case UPDATE_COMMENT_TEXT:
            return {
                ...state,
                commentText: action.newText
            }

        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
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
                            10: 'ноя',
                            11: 'дек'
                        }
                        let date = new Date()
                        const days = date.getDate()
                        const mouthIndex = date.getMonth()
                        const monthName = months[mouthIndex]
                        const hours = date.getHours()
                        let minutes = date.getMinutes()
                        if (minutes < 10) {
                            minutes = '0' + minutes
                        }
                        let currentDate = `${days} ${monthName} в ${hours}:${minutes}`
                        let newComment = {
                            id: post.comments.length === 0 ? 1 : post.comments.lenght + 1,
                            date: currentDate,
                            message: state.commentText,
                            likesCount: 0,
                            isYouLike: false,
                        }
                        return {
                            ...post,
                            comments: [...post.comments, newComment]
                        }
                    }
                    return post
                }
                ),
            }
        default:
            return state
    }
}

export const likeIt = (postId) => ({ type: LIKE_IT, postId })
export const dontLikeIt = (postId) => ({ type: DONT_LIKE_IT, postId })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText: newPostText })
export const setUserProfileSuccess = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const setCommentMode = (value, postId) => ({ type: SET_COMMENT_MODE, value, postId })
export const addComment = (commentText, postId) => ({ type: ADD_COMMENT, commentText, postId })
export const updateCommentText = (newText) => ({ type: UPDATE_COMMENT_TEXT, newText })
export const getUserProfile = (userId) => async dispatch => {
    dispatch(toggleIsFetching(true))
    let profile = await ProfileAPI.getUserProfile(userId)
    dispatch(setUserProfileSuccess(profile))
    dispatch(toggleIsFetching(false))
}

export const getUserStatus = (userId) => async dispatch => {
    dispatch(toggleIsFetching(true))
    let response = await ProfileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
    dispatch(toggleIsFetching(false))
}
export const updateUserStatus = (status) => async dispatch => {
    let response = await ProfileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}


export default profileReduser