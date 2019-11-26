import React from 'react'
import styles from './FriendItem.module.css'
import defaultUserPhoto from '../../../image/img1.jpg'


let lengthName = (name) => {
    if(name.length > 9){
        let spellName = name.slice(0, 7)
        let newName = spellName + `...`
        return newName
    }
    else{
        return name
    }
}

const FriendItem = ({photo, name}) => {
    return(
        <div className={styles.friendItem}>
            {photo != null ? 
            <img src={photo} alt='фото друга'></img>:
            <img src={defaultUserPhoto} alt='фото друга'></img>
            }
            {lengthName(name)}
        </div>
    )
}

export default FriendItem