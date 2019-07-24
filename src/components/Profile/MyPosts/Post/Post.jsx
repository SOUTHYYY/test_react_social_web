import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
    return(
        <div className={styles.item_wrapper}>
            <div className={styles.item_info}>
                <img src='https://vokrug.tv/pic/person/e/9/a/b/e9abb1b8929cede9f7058672f4b12556.jpeg'></img>
                {props.postName}
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