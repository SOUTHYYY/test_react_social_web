import React from 'react'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer