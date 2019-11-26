// import {createSelector} from 'reselect' // Для сложных селекторов

export const getUsers = (state) => {
    return state.findFriends.users
}
export const getPageSize = (state) => {
    return state.findFriends.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.findFriends.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.findFriends.currentPage
}
export const getIsFetching = (state) => {
    return state.findFriends.isFetching
}
export const getIsFollowingInProgress = (state) => {
    return state.findFriends.followingInProgress
}
export const getNewSearchText = (state) => {
    return state.findFriends.newSearchText
}