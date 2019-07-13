import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './ DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {


let dialogsElements =
    props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} image={dialog.image} /> );
        
let messagesElements = 
    props.state.messages.map( message => <Message  message={message.message} /> );     
      
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogs_item}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs