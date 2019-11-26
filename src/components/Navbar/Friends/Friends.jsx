import React from 'react';
import styles from './Friends.module.css'
import FriendItem from './FriendItem/FriendItem';


const Friends = ({mostPopularFriends}) => {
    let popularFriendsElements = 
            mostPopularFriends.map( data => 
                <FriendItem name={data.name} id={data.id} image={data.image} key={data.id} /> );
    
    return(
        <div className={styles.popular_friends}>
            {popularFriendsElements}
        </div>
    )
}

export default Friends