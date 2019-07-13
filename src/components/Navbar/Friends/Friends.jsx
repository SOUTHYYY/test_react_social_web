import React from 'react';
import styles from './Friends.module.css'
import FriendItem from './FriendItem/FriendItem';


const Friends = (props) => {
    let PopularFriendsElements = 
    props.state.most_popular_friends.map( data => <FriendItem name={data.name} id={data.id} image={data.image} /> );
    
    return(
        <div className={styles.popular_friends}>
            {PopularFriendsElements}
        </div>
    )
}

export default Friends