import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { OnSetAuthUserData } from '../../redux/auth-reduser'





class HeaderContainer extends React.Component {
    componentDidMount(){
        this.props.OnSetAuthUserData()
    }

    render() {
        return <Header  {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {
    OnSetAuthUserData
})(HeaderContainer)