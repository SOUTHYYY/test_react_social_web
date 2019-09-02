import React from 'react'
import { connect } from 'react-redux'
import FindFriends from './FindFriends'
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/find-friends-reduser'

const mapStateToProps = (state) => {
    return {
        users: state.findFriends.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindFriends)