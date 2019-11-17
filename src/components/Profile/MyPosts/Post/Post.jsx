import React, { useState, useEffect }from 'react'
import styles from './Post.module.css'
import TextareaAutosize from 'react-textarea-autosize';
import { setCommentMode } from '../../../../redux/profile-reduser'
// import moreOption from '../../../../image/more-options.png'
///////
import likePicture from '../../../../image/like.svg'
import onClickLikePicture from '../../../../image/likeOnClick.svg'
///
import commentPicture from '../../../../image/comment.svg'
import onClickcommentPicture from '../../../../image/onClickcommentPicture.svg'
///
import sharePicture from '../../../../image/share.svg'
// import onClickSharePicture from '../../../../image/shareOnClick.png'

import send from '../../../../image/send-button.svg'
import FullProfileInfo from '../../ProfileInfo/FullProfileInfo';
import CommentItem from './CommentItem/CommentItem'

const Post = (props) => {
    debugger
    let commentItem = props.comments === undefined ? null : props.comments.map(item =>
        <CommentItem
            date={item.date}
            message={item.message}
            key={item.id} />)

    let [commentMode, setCommentMode] = useState(props.onCommentHandler)
    let [commentText, setCommentText] = useState('')


    const onCommentHandler = () => {
        setCommentMode(commentMode ? false : true)
        props.setCommentMode(commentMode, props.id)
    }

    const addComment = () => {
        props.addComment(commentText, props.id)
        setCommentText('')
    }

    const onCommentTextChange = (e) => {
        setCommentText(e.currentTarget.value)
        props.updateCommentText(commentText)
    }
    const handleKeyPress = (target) => {
        if(target.charCode === 13){
            props.addComment(commentText, props.id)
            setCommentText('')

        }
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.item_wrapper}>
                <div className={styles.item_info_container}>
                    <img src='https://pp.userapi.com/c855024/v855024603/ac9e4/cZnQYXZ7a8E.jpg?ava=1' alt=""></img>
                    <div className={styles.item_Info}>
                        <p>{props.postAuthor}</p>
                        <p>{props.date}</p>
                    </div>
                    {/*
                    //TODO: доделать выпадающий список у поста с возможностью его удаления
                    */}
                    <div className={styles.moreOption}>
                        {/* <img src={moreOption} alt="" /> */}
                    </div>
                </div>
                <div className={styles.post}>
                    {props.message}
                </div>
                <hr />
                <div className={styles.interactionItems}>
                    <div className={styles.like}>
                        <div className={styles.onClickWrapper}>
                            {/* { commentMode ?
                                <img src={onClickLikePicture} alt="Нравится" /> : */}
                            <img src={likePicture} alt="Не нравится" />
                        </div>
                        <p>{props.likesCount}</p>
                    </div>
                    <div className={styles.comment} onClick={onCommentHandler}>
                        {commentMode ?
                            <img src={onClickcommentPicture} alt="Нравится" /> :
                            <img src={commentPicture} alt="Не нравится" />}
                        <p>{props.comments === undefined ? 0 : props.comments.length}</p>
                    </div>
                    <div className={styles.share}>
                        <img src={sharePicture} alt="Поделиться" />
                    </div>
                </div>
            </div>
            <div>
                { props.comments != undefined && commentMode ? 
                    <div className={styles.commentsWrapper} >
                        {
                            props.comments === undefined ? null :
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
                            <div className={styles.sendButtonWrapper} onClick={addComment}>
                                <img src={send} alt="send button" />
                            </div>
                        </div>

                    </div> : null}
            </div>
        </div>
    )
}
export default Post