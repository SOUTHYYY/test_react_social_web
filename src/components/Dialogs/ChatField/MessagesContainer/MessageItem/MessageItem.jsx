import React from 'react'
import styles from './MessageItem.module.css'
import userPhoto from '../../../../../image/img1.jpg'



const MessageItem = ({message}) => {
    return(
        <div className={styles.message}>
            <img src={userPhoto} alt="ваш друг"/>
            <div className={styles.message_body}>
                <p>Лаптырев Алексей</p>
                <p>{message}</p>
            </div>
        </div>
    )
}



export default MessageItem