import React from 'react'
import styles from './FindFriends.module.css'


const FindFriends = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainBox}>
                <h1>Поиск новых друзей</h1>
                <textarea className={styles.textArea} ></textarea>
            </div>
            <div className={styles.container}>
                {
                    props.users.map(u => <div key={u.id}>
                            <div className={styles.userCardWrapper}>
                                <div className={styles.userImageContainer}>
                                    <img src={u.image} alt="user image" className={styles.userImage} />
                                </div>
                                <div className={styles.userInfo}>
                                    <h2>{u.fullName}</h2>
                                    <ul>
                                        <li>{u.status}</li>
                                        <li>{`${u.location.country} ${u.location.city}`}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FindFriends