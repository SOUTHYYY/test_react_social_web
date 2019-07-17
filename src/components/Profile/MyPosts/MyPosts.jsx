import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let postsElements = 
        props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />)

    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        if(newPostElement.current.value == '' || newPostElement.current.value == ' ') {return}
        else{
            props.addPost(text)
            newPostElement.current.value = ''  
        }
    }
    return(
        <div className={styles.postsBlock}>
            <div className={styles.news_top_block}>
                <h3>Мои записи</h3>
                <div className={styles.qwerty}>
                    <div>
                        <textarea className={styles.place_for_new_post} ref={newPostElement} placeholder='Что у вас нового?'></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>
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