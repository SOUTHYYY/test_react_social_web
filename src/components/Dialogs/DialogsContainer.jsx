import {compose} from 'redux'
import { sendMessageActionCreator, fullMode, getCurrentUserId, onSearchChange, initialFilteredDialogs} from '../../redux/dialogs-redux/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';




let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage, 
        isAuth: state.auth.isAuth,
        isFullMode: state.messagesPage.isFullMode,
        currentId: state.messagesPage.currentId,
        search: state.messagesPage.search,
        filteredDialogs: state.messagesPage.filteredDialogs
        
    } 
}

compose(
    connect(mapStateToProps, {sendMessageActionCreator, fullMode, getCurrentUserId, onSearchChange, initialFilteredDialogs}),
    WithAuthRedirect
)(Dialogs)

// Create component w// HOC, which prevents unauthorized users from rendering the component
let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, {sendMessageActionCreator, fullMode,getCurrentUserId, onSearchChange, initialFilteredDialogs})(AuthRedirectComponent)

export default DialogsContainer