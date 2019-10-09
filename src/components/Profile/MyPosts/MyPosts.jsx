import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

    let postsElements = 
        props.posts.map( post => 
        <Post message={post.message} 
        likesCount={post.likesCount}
        postAuthor={props.postAuthor}
        date={post.date} 
        key={post.id} />)

    let newPostElement = React.createRef()
    let onAddPost = () => {
        let text = newPostElement.current.value
        if(text === '' || text === ' ') return
        else{
            props.addPost()
        }
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text) 
    }
    let handleKeyPress = (target) => {
        if(target.charCode===13){
            console.log('123')
            onAddPost()
        }
    }
    return(
        <div className={styles.postsBlock}>
            <div className={styles.news_top_block_container}>
                <h3>Мои записи</h3>
                <div className={styles.news_top_block}>
                    <div className={styles.wrapper_textArea}>
                        <input className={styles.textArea}
                        placeholder='Что у вас нового?'
                        onKeyPress={handleKeyPress}
                        value={props.newPostText}
                        onChange={onPostChange}
                        type="text" autoFocus
                        ref={newPostElement}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add Post</button>
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