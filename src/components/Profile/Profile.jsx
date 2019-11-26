import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({users, profile, status, updateUserStatus, pageInfoBar, handleIsFullInfoOpen}) => {
    return(
      <div className={styles.profile}>
        <ProfileInfo users={users} profile={profile} status={status} 
        updateUserStatus={updateUserStatus} pageInfoBar={pageInfoBar}
        handleIsFullInfoOpen={handleIsFullInfoOpen}/>
      </div>
    )
}
export default Profile