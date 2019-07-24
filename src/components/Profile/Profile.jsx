import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return(
      <div className={styles.profile}>
        <ProfileInfo />
        <MyPosts posts={props.state.posts}
          newPostText={props.state.newPostText}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
          postName={props.state.postName} />
          

      </div>
    );
}
export default Profile