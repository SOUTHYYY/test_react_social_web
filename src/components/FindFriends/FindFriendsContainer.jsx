import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/find-friends-reduser'
import FindFriends from './FindFriends'
import Preloader from '../Common/Preloader/Preloader.js'
import { UsersAPI } from '../../API/api'


class FindFriendsСontainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)

        UsersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        UsersAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
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
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching
})(FindFriendsСontainer)
