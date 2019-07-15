import React from 'react'
import styles from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img src='https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg'></img>
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}





export default ProfileInfo