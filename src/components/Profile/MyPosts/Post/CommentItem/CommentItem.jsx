import React from 'react'
import styles from './CommentItem.module.css'
import defaultUserPhoto from '../../../../../image/img1.jpg'

const CommentItem = (props) => {
    return (
        <div className={styles.commentItem}>
            <img src={defaultUserPhoto} alt="commentator photo" />
            <div className={styles.commentItemInfo}>
                <p>Лаптырев Алексей</p>
                <p>{props.message}</p>
                <p>{props.date}</p>
            </div>
        </div>
    )
}

export default CommentItem