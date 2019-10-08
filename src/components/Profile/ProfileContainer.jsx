import React from 'react'
import {compose} from 'redux'
import Profile from "./Profile";
import {connect} from 'react-redux'
import {setUserProfile} from '../../redux/profile-reduser'
import {withRouter} from 'react-router'
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        this.props.setUserProfile(userId)
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {setUserProfile,}),
    WithAuthRedirect,
    withRouter,
)(ProfileContainer)

