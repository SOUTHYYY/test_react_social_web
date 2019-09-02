import React from 'react'
import styles from './ProfileInfo.module.css'
import MoodPhoto from '../MoodPhoto/MoodPhoto';


const ProfileInfo = () => {
    return(
        <div>
            <MoodPhoto />
            <div className={styles.descriptionBlock}>
                <div className={styles.leftBlock}>
                    <div className={styles.profilePhotoBlock}>
                        <img className={styles.profilePhoto} src="https://sun1-19.userapi.com/c855024/v855024603/ac9e2/KwLT4EKegIM.jpg?ava=1" alt="profile photo"/>
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.infoBLock}>
                        <div className={styles.mainInfo}>
                            <h1>Алексей Лаптырев</h1>
                            <div className={styles.statusInfo}>
                                <span>изменить статус</span>
                            </div>
                            <hr/>
                        </div>
                        <div className={styles.fullInfo}>
                            <p><span>День рождения: </span>30 июля 1916 г.</p>
                            <p><span>Город: </span>Москва</p>
                            <p><span>Семейное положение:</span> не женат</p>
                            <p><span>Братья, сестры: </span>Николай Коруна, Иван Демуцкий, Кристиан Гришин, Степа Шарыпов</p>
                            <p><span>Сын: </span>Дамир Малеков</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}





export default ProfileInfo