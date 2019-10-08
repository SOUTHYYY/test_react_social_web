import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './ DialogItem/DialogItem'
import Message from './Message/Message'
import {Redirect} from 'react-router-dom'


const Dialogs = (props) => {
    debugger

    let dialogsElements =
    props.messagesPage.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} image={dialog.image} key={dialog.id} /> );
        
    let messagesElements = 
    props.messagesPage.messages.map( message => <Message  message={message.message} key={message.id} /> );     

    let newMessageText = props.messagesPage.newMessageText

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageTextChange = (e) => {
        let newText = e.target.value
        props.updateNewMessageText(newText)
    }

    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogs_item}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                <div className={styles.messagesHeader + ' ' + styles.border}>
                    <div className={styles.backtoMessages}>

                    </div>
                    <div className={styles.messagesHeaderName}>
                        <h3>Аня Ковалева</h3>
                    </div>
                    <div className={styles.messagesHeaderPhoto}>
                        <img className={styles.messagesHeaderPhotoItem} src="https://pp.userapi.com/c841633/v841633205/751d2/zSqaD3S_nn4.jpg?ava=1" alt="Ваш собеседник"/>
                    </div>
                </div>
                <div className={styles.messagesElements}>
                    { messagesElements }
                </div>
                <div className={styles.sendMessages}>
                        <textarea value={newMessageText}
                            onChange={onNewMessageTextChange}
                            placeholder="Введите ваше сообщение">
                        </textarea>
                        <button onClick={onSendMessageClick}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs