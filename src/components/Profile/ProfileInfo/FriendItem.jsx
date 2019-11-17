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

const FriendItem = (props) => {
    return(
        <div className={styles.friendItem}>
            <img src={props.photo != null ? props.photo : defaultUserPhoto} alt="Фото друга"/>
            {lengthName(props.name)}
        </div>
    )
}

export default FriendItem