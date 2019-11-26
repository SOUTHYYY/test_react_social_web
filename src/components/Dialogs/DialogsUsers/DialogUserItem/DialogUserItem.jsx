import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './DialogUserItem.module.css'
import userPhoto from '../../../../image/img1.jpg'



const DialogUserItem = ({id, getCurrentUserId, image, name}) => {

    let path = '/dialogs/' + id;

    let handleGetUserId = () => {
        getCurrentUserId(id)
    }
    return (
        <NavLink to={path}>
            <div className={styles.dialog + " " + styles.active} onClick={handleGetUserId}>
                <div className={styles.dialogUserImage}>
                    <img src={image} alt=""></img>
                </div>
                <div className={styles.dialogItemInfo}>
                    <div className={styles.topInfo}>
                        {name}
                        <div className={styles.date}>
                            <span>11:50</span>
                        </div>
                    </div>
                    <div className={styles.lastMessage}>
                        <img src={userPhoto} alt=""/>
                        Все парни козлы
                    </div>
                </div>               
            </div>
        </NavLink>
    )
}


export default DialogUserItem