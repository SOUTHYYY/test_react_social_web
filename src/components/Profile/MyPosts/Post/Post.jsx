import React, { useState}from 'react'
import styles from './Post.module.css'
import TextareaAutosize from 'react-textarea-autosize';
import likePicture from '../../../../image/like.svg'

import commentPicture from '../../../../image/comment.svg'
import onClickcommentPicture from '../../../../image/onClickcommentPicture.svg'

import sharePicture from '../../../../image/share.svg'

import send from '../../../../image/send-button.svg'
import CommentItem from './CommentItem/CommentItem'

const Post = ({message, likesCount, comments, postAuthor, date, onCommentHandler, id, addComment, updateCommentText, setCommentMode}, ...props) => {
    let commentItem = comments === undefined ? null : comments.map(item =>
        <CommentItem
            date={item.date}
            message={item.message}
            key={item.id} />)

    let [commentMode, setComment] = useState(onCommentHandler)
    let [commentText, setCommentText] = useState('')


    const onCommentHandleClick = () => {
        setComment(commentMode ? false : true)
        setCommentMode(commentMode, id)
    }

    const addCommentClick = () => {
        addComment(commentText, id)
        setCommentText('')
    }

    const onCommentTextChange = (e) => {
        setCommentText(e.currentTarget.value)
        updateCommentText(commentText)
    }
    const handleKeyPress = (target) => {
        if(target.charCode === 13){
            addComment(commentText, id)
            setCommentText('')

        }
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.item_wrapper}>
                <div className={styles.item_info_container}>
                    <img src='https://pp.userapi.com/c855024/v855024603/ac9e4/cZnQYXZ7a8E.jpg?ava=1' alt=""></img>
                    <div className={styles.item_Info}>
                        <p>{postAuthor}</p>
                        <p>{date}</p>
                    </div>
                </div>
                <div className={styles.post}>
                    {message}
                </div>
                <hr />
                <div className={styles.interactionItems}>
                    <div className={styles.like}>
                        <div className={styles.onClickWrapper}>
                            <img src={likePicture} alt="Не нравится" />
                        </div>
                        <p>{likesCount}</p>
                    </div>
                    <div className={styles.comment} onClick={onCommentHandleClick}>
                        {commentMode ?
                            <img src={onClickcommentPicture} alt="Нравится" /> :
                            <img src={commentPicture} alt="Не нравится" />}
                        <p>{comments === undefined ? 0 : comments.length}</p>
                    </div>
                    <div className={styles.share}>
                        <img src={sharePicture} alt="Поделиться" />
                    </div>
                </div>
            </div>
            <div>
                { comments !== undefined && commentMode ? 
                    <div className={styles.commentsWrapper} >
                        {
                            comments === undefined ? null :
                                <div className={styles.commentsItemsWrapper}>
                                    {commentItem}
                                </div>
                        }
                        <div className={styles.test}>
                            <img src='https://pp.userapi.com/c855024/v855024603/ac9e4/cZnQYXZ7a8E.jpg?ava=1' alt="you"></img>
                            <TextareaAutosize
                                onChange={onCommentTextChange}
                                maxRows='4'
                                autoFocus
                                placeholder='Введите коментарий...'
                                onKeyPress={handleKeyPress}
                                value={commentText} /> 
                            <div className={styles.sendButtonWrapper} onClick={addCommentClick}>
                                <img src={send} alt="send button" />
                            </div>
                        </div>

                    </div> : null}
            </div>
        </div>
    )
}
export default Post