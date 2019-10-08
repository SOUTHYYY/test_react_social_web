import React from 'react'
import {compose} from 'redux'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';




let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage, 
        isAuth: state.auth.isAuth
    } 
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch( sendMessageActionCreator() )
        },
        updateNewMessageText:  (newText) => {
            dispatch( updateNewMessageTextActionCreator(newText) )
        }
    }
}
compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

// Create component w// HOC, which prevents unauthorized users from rendering the component
let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer