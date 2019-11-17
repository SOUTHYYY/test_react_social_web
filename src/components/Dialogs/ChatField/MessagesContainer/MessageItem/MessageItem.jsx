import React from 'react'
import styles from './MessageItem.module.css'
import userPhoto from '../../../../../image/img1.jpg'



const MessageItem = (props) => {
    debugger
    return(
        <div className={styles.message}>
            <img src={userPhoto} alt="ваш друг"/>
            <div className={styles.message_body}>
                <p>Лаптырев Алексей</p>
                <p>{props.message}</p>
            </div>
        </div>
    )
}



export default MessageItem