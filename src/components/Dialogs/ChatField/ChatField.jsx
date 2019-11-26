import React from 'react'
import styles from './ChatField.module.css'
import ChatFieldHeader from './ChatFieldHeader/ChatFieldHeader'
import MessagesContainer from './MessagesContainer/MessagesContainer'
import SendMessageForm from './SendMessageForm/SendMessageForm'

const ChatField = ({isFullMode, fullMode, currentId, sendMessage, users}) => {

    return (
        <section clasName={styles.ChatField}>
            <ChatFieldHeader isFullMode={isFullMode} fullMode={fullMode} currentId={currentId}/>
            <MessagesContainer users={users} currentId={currentId}/>
            <SendMessageForm sendMessage={sendMessage}/>
        </section>
    )
}

export default ChatField