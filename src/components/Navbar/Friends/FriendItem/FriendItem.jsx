import React from 'react'
import styles from './FriendItem.module.css'


const FriendItem = (props) => {
    return(
        <div className={styles.item}>
            <img src={props.image} alt=""></img>
            <p>{props.name}</p>
        </div>
    )
}



export default FriendItem