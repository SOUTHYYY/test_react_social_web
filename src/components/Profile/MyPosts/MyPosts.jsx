import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let postsElements = 
        props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />)

    return(
        <div className={styles.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {
                    postsElements
                }
            </div>   
        </div>
    )
}

export default MyPosts