import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
    return(
        <div className={styles.item}>
            <img src='https://vokrug.tv/pic/person/e/9/a/b/e9abb1b8929cede9f7058672f4b12556.jpeg'></img>
            {props.message}
            <div className={styles.like}>
                <span className={styles.like}>like</span>
            </div>
        </div>
    )
}

export default Post