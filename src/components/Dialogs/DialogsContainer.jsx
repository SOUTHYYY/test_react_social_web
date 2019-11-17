import {compose} from 'redux'
import { sendMessageActionCreator, fullMode, getCurrentUserId} from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';




let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage, 
        isAuth: state.auth.isAuth,
        isFullMode: state.messagesPage.isFullMode,
        currentId: state.messagesPage.currentId
        
    } 
}

compose(
    connect(mapStateToProps, {sendMessageActionCreator, fullMode, getCurrentUserId}),
    WithAuthRedirect
)(Dialogs)

// Create component w// HOC, which prevents unauthorized users from rendering the component
let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, {sendMessageActionCreator, fullMode,getCurrentUserId})(AuthRedirectComponent)

export default DialogsContainer