import React from 'react'
import styles from './MoodPhoto.module.css'


const MoodPhoto = (state) => {

    return(
        <div className={styles.imgWrapper}>
            <img className={styles.profileBackground} src='https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg' alt='ваше фото настроения' height='100%'></img>
            <div className={styles.mask}></div>
            <button className={styles.profileBackgroundButtonChange}>Изменить картику</button>
        </div>
    )
}

export default MoodPhoto