import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

    return(
      <div className={styles.profile}>
        <ProfileInfo />
        <MyPostsContainer /> 
      </div>
    );
}
export default Profile