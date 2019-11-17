import React from 'react'
import styles from './ChatField.module.css'
import ChatFieldHeader from './ChatFieldHeader/ChatFieldHeader'
import MessagesContainer from './MessagesContainer/MessagesContainer'
import SendMessageForm from './SendMessageForm/SendMessageForm'

const ChatField = (props) => {

    return (
        <section clasName={styles.ChatField}>
            <ChatFieldHeader isFullMode={props.isFullMode} fullMode={props.fullMode} currentId={props.currentId}/>
            <MessagesContainer users={props.users} currentId={props.currentId}/>
            <SendMessageForm sendMessage={props.sendMessage}/>
        </section>
    )
}

export default ChatField