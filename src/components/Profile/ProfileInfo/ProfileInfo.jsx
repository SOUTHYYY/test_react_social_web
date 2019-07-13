import React from 'react'
import styles from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img src='https://media.macphun.com/img/uploads/uploads/skylum/luminar-plugin/GoldenHour3-Before.jpg?size=1x&q=20'></img>
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}





export default ProfileInfo