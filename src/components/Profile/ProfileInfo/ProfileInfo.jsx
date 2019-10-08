import React from 'react'
import styles from './ProfileInfo.module.css'
import MoodPhoto from '../MoodPhoto/MoodPhoto';
import Prealoader from '../../Common/Preloader/Preloader';
import defaultUserPhoto from '../../../image/default_user.jpg'
import ProfileStatus from './ProfileStatus'


const ProfileInfo = (props) => {

    if(!props.profile){
        return <Prealoader />
    }

    return(
        <div>
            <MoodPhoto />
            <div className={styles.descriptionBlock}>
                <div className={styles.leftBlock}>
                    <div className={styles.profilePhotoBlock}>
                        <img className={styles.profilePhoto} src={props.profile.photos.large != null ? props.profile.photos.large : defaultUserPhoto} alt=""/>
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.infoBLock}>
                        <div className={styles.mainInfo}>
                            <h1>{props.profile.fullName}</h1>
                            <ProfileStatus status='Hello my friends'/>
                            <div className={styles.statusInfo}>
                                <span>{props.profile.statusInfo}</span>
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