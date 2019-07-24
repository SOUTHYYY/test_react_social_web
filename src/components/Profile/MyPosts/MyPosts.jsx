import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let postsElements = 
        props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} postName={props.postName} />)

    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        if(newPostElement.current.value == '' || newPostElement.current.value == ' ') {return}
        else{ props.addPost(text) }
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        
    }
    return(
        <div className={styles.postsBlock}>
            <div className={styles.news_top_block_container}>
                <h3>Мои записи</h3>
                <div className={styles.news_top_block}>
                    <div className={styles.wrapper_textArea}>
                        <textarea className={styles.textArea} 
                            ref={newPostElement} 
                            onChange={onPostChange}
                            placeholder='Что у вас нового?' 
                            value={props.newPostText}
                        />
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