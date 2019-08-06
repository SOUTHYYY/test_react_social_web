import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './ DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reduser';

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage

    let dialogsElements =
    state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} image={dialog.image} /> );
        
    let messagesElements = 
    state.messages.map( message => <Message  message={message.message} /> );     

    let newMessageText = state.newMessageText

    const onSendMessageClick = () => {
        props.store.dispatch( sendMessageActionCreator() )
    }
    const onNewMessageTextChange = (e) => {
        let newText = e.target.value
        props.store.dispatch( updateNewMessageTextActionCreator(newText) )
    }
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogs_item}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                <div className={`${styles.messagesHeader} ${styles.border}`}>
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
                <div>
                    { messagesElements }
                </div>
                <div className={styles.sendMessages}>
                    <div>
                        <textarea value={newMessageText}
                            onChange={onNewMessageTextChange}
                            placeholder="Введите ваше сообщение">
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Отправить</button>
                    </div>
                </div>  

            </div>
        </div>
    )
}

export default Dialogs