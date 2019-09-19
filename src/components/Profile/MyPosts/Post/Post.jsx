import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
    return(
        <div className={styles.item_wrapper}>
            <div className={styles.item_info}>
                <img src='https://pp.userapi.com/c855024/v855024603/ac9e4/cZnQYXZ7a8E.jpg?ava=1' alt=""></img>
                {props.postAuthor}
            </div>
            <div className={styles.post}>
                {props.message}
            </div>
            <hr />
            <div className={styles.like}>
                <span className={styles.likesCount}>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post