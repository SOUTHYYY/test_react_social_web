import React from 'react'
import styles from './FindFriends.module.css'
import userPhoto from '../../image/default_user.jpg'
import {NavLink} from 'react-router-dom'


let FindFriends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = []

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

    return(
        <div className={styles.wrapper}>
            <div className={styles.mainBox}>
                <h1>Поиск новых друзей</h1>
                <textarea className={styles.textArea}></textarea>
                <button>Get users</button>
            </div>
            <div className={styles.container}>
                {
                    props.users.map(u => <div key={u.id}>
                        <div className={styles.userCardWrapper}>
                            <div className={styles.userImageContainer}>
                                <NavLink to={'/profile/' + u.id }>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="user image" className={styles.userImage} />
                                </NavLink>
                                <div className={styles.mask}></div>
                                <button className={styles.profileBackgroundButtonChange}></button>
                            </div>
                            <div className={styles.userInfo}>
                                <h2>{u.name}</h2>
                                <ul>
                                    <li>{u.status}</li>
                                    <li>{"`${u.location.country} ${u.location.city}`"}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            <div className={styles.pages}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
        </div>
    )
}



export default FindFriends