import React from 'react'
import styles from './MessagesContainer.module.css'
import MessageItem from './MessageItem/MessageItem'

const MessagesContainer = ({users, currentId }) => {
    const chooseDialog = 'Выберете диалог'
    const newDialog = 'У вас еще нету диалога, не стесняйтесь!'

    let currentUserIdMessagesElem = users.map(dialog => {
        if (dialog.id === currentId) {
            if (dialog.messages.length === 0) {
                return <div className={styles.unkownDialog}>{newDialog}</div>
            } else {
                let userMessages = dialog.messages.map(message => {
                    return <MessageItem message={message.message} key={message.id} />;
                })
                return userMessages
            }
        }
    })


    return (
        <section className={styles.messageContainer}>
            {currentId === null ? <div className={styles.unkownDialog}>{chooseDialog}</div>
            : currentUserIdMessagesElem}
        </section>
    )
}

export default MessagesContainer