import React from 'react'
import { connect } from 'react-redux'
import {
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, requestUsers, findFriend,
    updateNewSearchText, followSuccess, unfollowSuccess,
} from '../../redux/find-friends-redux/find-friends-reducer'
import {
    getUsers, getPageSize, getTotalUsersCount,
    getCurrentPage, getIsFetching, getIsFollowingInProgress,
    getNewSearchText} from '../../redux/selectors/find-friends-selector'
import FindFriends from './FindFriends'
import Preloader from '../Common/Preloader/Preloader.js'
import { compose } from 'redux'
import { WithAuthRedirect } from '../HOC/WithAuthRedirect'
import styles from './FindFriends.module.css'



class FindFriendsСontainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage)
    }
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(this.props.pageSize, pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? 
            <div className={styles.preloader}>
                <h1>Загружаем</h1>
                <Preloader />
            </div>: <FindFriends
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                newSearchText={this.props.newSearchText}
            />}
        </>
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.findFriends.users,
//         pageSize: state.findFriends.pageSize,
//         totalUsersCount: state.findFriends.totalUsersCount,
//         currentPage: state.findFriends.currentPage,
//         isFetching: state.findFriends.isFetching,
//         followingInProgress: state.findFriends.followingInProgress,
//         newSearchText: state.findFriends.newSearchText
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getIsFollowingInProgress(state),
        newSearchText: getNewSearchText(state)
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage,findFriend, updateNewSearchText, toggleFollowingProgress, requestUsers, followSuccess, unfollowSuccess}),
)(FindFriendsСontainer)

