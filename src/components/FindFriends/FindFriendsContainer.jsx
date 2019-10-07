import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, 
        toggleFollowingProgress, getUsers, findFriend,
        updateNewSearchText, followSuccess, unfollowSuccess,
    } from '../../redux/find-friends-reduser'
import FindFriends from './FindFriends'
import Preloader from '../Common/Preloader/Preloader.js'


class FindFriendsСontainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber)
    }
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <FindFriends
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                newSearchText={this.props.newSearchText}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.findFriends.users,
        pageSize: state.findFriends.pageSize,
        totalUsersCount: state.findFriends.totalUsersCount,
        currentPage: state.findFriends.currentPage,
        isFetching: state.findFriends.isFetching,
        followingInProgress: state.findFriends.followingInProgress,
        newSearchText: state.findFriends.newSearchText
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,
    findFriend, updateNewSearchText, toggleFollowingProgress,
    getUsers, followSuccess, unfollowSuccess
})(FindFriendsСontainer)
