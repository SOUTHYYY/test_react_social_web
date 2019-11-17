import React, { useState } from 'react'
import styles from './SendMessageForm.module.css'
import attach from "../../../../image/attach.svg"
import send from '../../../../image/send-button-gray.svg'

const SendMessageForm = (props) => {
    const [message, setMessage] = useState('')

    let currentMessageChanged = (e) => {
        setMessage(e.target.value)
    }

    const sendMessage = (e) => {
        e.preventDefault()
        props.sendMessage(message)
        setMessage('')
    }
    return (
        <div className={styles.SendMessageForm}>
            <form onSubmit={sendMessage}>
                <img src={attach} alt=""/>
                <input
                    type="text"
                    value={message}
                    onChange={currentMessageChanged}
                    placeholder="Введите сообщение..." />
                <button type="submit">
                    <img src={send} alt=""/>
                </button>
            </form>
        </div>
    )
}

export default SendMessageForm