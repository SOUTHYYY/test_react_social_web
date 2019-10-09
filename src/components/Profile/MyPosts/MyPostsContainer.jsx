import React from 'react'
import { addPost, updateNewPostText} from '../../../redux/profile-reduser';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        postAuthor: state.profilePage.postAuthor
    }
}
const MyPostsContainer = connect(mapStateToProps, {
    addPost, updateNewPostText
})(MyPosts)
export default MyPostsContainer