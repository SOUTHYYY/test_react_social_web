import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reduser';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        postAuthor: state.profilePage.postAuthor
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch( action )
        },
        addPost: () => {
            dispatch( addPostActionCreator() )
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer