import React from 'react'
import styles from './Dialogs.module.css'
import { required, maxLengthCreator } from '../Utils/Validators/validator'
import ChatField from './ChatField/ChatField'
import DialogsUsers from './DialogsUsers/DialogsUsers'


const Dialogs = (props) => {
    debugger
    return <section className={styles.dialogs}>
        <DialogsUsers users={props.messagesPage.dialogs} getCurrentUserId={props.getCurrentUserId} isFullMode={props.isFullMode}/>
        <ChatField users={props.messagesPage.dialogs} 
        sendMessage={props.sendMessageActionCreator}
        isFullMode={props.isFullMode}
        fullMode={props.fullMode}
        currentId={props.currentId}/>
    </section>
}

export default Dialogs