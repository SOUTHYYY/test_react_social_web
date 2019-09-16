import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/find-friends-reduser'
import FindFriends from './FindFriends'
import * as axios from 'axios'
import Preloader from '../Common/Preloader/Preloader.js'

class FindFriendsСontainer extends React.Component {
    componentDidMount(props) {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)

            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return <>
            {this.props.isFetching? <Preloader />: null}
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