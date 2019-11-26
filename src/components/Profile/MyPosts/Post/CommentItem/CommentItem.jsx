import React from 'react'
import styles from './CommentItem.module.css'
import defaultUserPhoto from '../../../../../image/img1.jpg'

const CommentItem = ({message, date}) => {
    return (
        <div className={styles.commentItem}>
            <img src={defaultUserPhoto} alt="commentator" />
            <div className={styles.commentItemInfo}>
                <p>Лаптырев Алексей</p>
                <p>{message}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default CommentItem