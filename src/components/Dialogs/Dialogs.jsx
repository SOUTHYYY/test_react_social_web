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
                <div className={styles.messagesHeader + " " + styles.border}>
                    <div className={styles.backtoMessages}>
                        <img src="/src/image/galka.png" alt=""/>
                    </div>
                    <div className={styles.messagesHeaderName + " " + styles.border}>
                        <h3>Аня Ковалева</h3>
                    </div>
                    <div className={styles.messagesHeaderPhoto + " " + styles.border}>
                        <img className={styles.messagesHeaderPhotoItem} src="https://pp.userapi.com/c841633/v841633205/751d2/zSqaD3S_nn4.jpg?ava=1" alt="Ваш собеседник"/>
                    </div>

                </div>
                { messagesElements }
                <div className={styles.sendMssages}>
                    
                </div>  

            </div>
        </div>
    )
}

export default Dialogs