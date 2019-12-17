import React from 'react'
import {compose} from 'redux'
import Profile from "./Profile";
import {connect} from 'react-redux'
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-redux/profile-reducer'
import {requestUsers} from '../../redux/find-friends-redux/find-friends-reducer'
import {withRouter} from 'react-router'
import Prealoader from '../Common/Preloader/Preloader';
import styles from './Profile.module.css'


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
        this.props.requestUsers(6, 14)
    }

    render() {
        return <>
            {this.props.isFetching ? 
            <div className={styles.preloader}>
                <h1>Загружаем</h1>
                <Prealoader />
            </div>
            : <Profile {...this.props} users={this.props.users} profile={this.props.profile} status={this.props.status}
            updateUserStatus={this.props.updateUserStatus} pageInfoBar={this.props.pageInfoBar}
            handleIsFullInfoOpen={this.props.handleIsFullInfoOpen}/>}
        </>
        
    }
}

let mapStateToProps = (state) => ({
    isFetching: state.profilePage.isFetching,
    profile: state.profilePage.profile,
    pageInfoBar: state.profilePage.pageInfoBar,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.profilePage.isAuth,
    users: state.findFriends.users,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, requestUsers}),
    withRouter,
)(ProfileContainer)

