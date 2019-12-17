import { addPost, likeIt, dontLikeIt, setCommentMode, addComment, updateCommentText} from '../../../redux/profile-redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postAuthor: state.profilePage.postAuthor,
        commentText: state.profilePage.commentText
    }
}
const MyPostsContainer = connect(mapStateToProps, {
    addPost, likeIt, dontLikeIt, setCommentMode, addComment, updateCommentText
})(MyPosts)

export default MyPostsContainer