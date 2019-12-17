import { UsersAPI } from '../../API/api'
import {updateObjectInArray} from '../../components/Utils/object-helper'
import {FOLLOW,
        UNFOLLOW,
        SET_USERS,
        SET_CURRENT_PAGE,
        SET_TOTAL_USERS_COUNT,
        TOGGLE_IS_FETCHING,
        TOGGLE_IS_FOLLOWING_PROGRESS,
        FIND_FRIEND,
        UPDATE_NEW_SEARCH_TEXT} from './find-reiends-consts'


let initialState = {
    users: [],
    pageSize: 40,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    currentSearchValue: '',
    newSearchText: '',
}


const findFriendsReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id',{followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id' ,{followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        case FIND_FRIEND:
            return {
                ...state,
                currentSearchValue: action.currentSearchValue
            }
        case UPDATE_NEW_SEARCH_TEXT:
            return {
                ...state,
                newSearchText: action.newSearchText
            }
        default:
            return state
    }

}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
export const findFriend = (currentSearchValue) => ({ type: FIND_FRIEND, currentSearchValue })
export const updateNewSearchText = (newSearchText) => ({ type: UPDATE_NEW_SEARCH_TEXT, newSearchText })
export const requestUsers = (pageSize, currentPage) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    let data = await UsersAPI.getUsers(pageSize, currentPage)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, UsersAPI.followUser.bind(UsersAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, UsersAPI.unfollowUser.bind(UsersAPI), unfollowSuccess)
}

export default findFriendsReduser