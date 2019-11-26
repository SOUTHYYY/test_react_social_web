import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm, Field } from 'redux-form'
import {required, maxLengthCreator } from '../../Utils/Validators/validator'
import { Textarea } from '../../Common/FormsControl/FormsControl'

const maxLength500 = maxLengthCreator(500)

const AddPostForm = ({handleSubmit}) => {
    return (
        <form className={styles.handleSubmitForm} onSubmit={handleSubmit}>
            <Field className={styles.textArea}
                name={'newPostTextBody'}
                component={Textarea}
                placeholder='Что у вас нового?'
                autoFocus
                validate={[required, maxLength500]} />
            <button>Добавить пост</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'addPost'
})(AddPostForm)

const MyPosts = React.memo(props => {

    let postsElements =
        props.posts.map(post =>
            <Post
                message={post.message}
                commentText={props.commentText}
                likesCount={post.likesCount}
                comments={post.comments}
                postAuthor={props.postAuthor}
                isYouLike={post.isYouLike}
                onCommentCLick={post.onCommentCLick}
                setCommentMode={props.setCommentMode}
                addComment={props.addComment}
                updateCommentText={props.updateCommentText}
                date={post.date}
                id={post.id}
                key={post.id}
                likeIt={props.likeIt}
                dontLikeIt={props.dontLikeIt} />)

    let onAddPost = (value) => { 
        props.addPost(value.newPostTextBody)
    }
    return (
        <div className={styles.posts}>
            <h3>Мои посты</h3>
            <div className={styles.addPostForm}>
                <AddPostReduxForm onSubmit={onAddPost} />
            </div>
            <div className={styles.posts}>
                {
                    postsElements
                }
            </div>
        </div>
    )
})

export default MyPosts