import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return(
      <div className={styles.profile}>
        <ProfileInfo users={props.users} profile={props.profile} status={props.status} 
        updateUserStatus={props.updateUserStatus} pageInfoBar={props.pageInfoBar}
        handleIsFullInfoOpen={props.handleIsFullInfoOpen}/>
      </div>
    )
}
export default Profile