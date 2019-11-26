import React from 'react'
import styles from './FriendItem.module.css'


const FriendItem = ({image, name}) => {
    return(
        <div className={styles.item}>
            <img src={image} alt=""></img>
            <p>{name}</p>
        </div>
    )
}



export default FriendItem