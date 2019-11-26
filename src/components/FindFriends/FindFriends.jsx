import React from 'react'
import styles from './FindFriends.module.css'
import userPhoto from '../../image/default_user.jpg'
import { NavLink } from 'react-router-dom'
import Paginator from '../Common/Paginator/Paginator'



let FindFriends = ({currentPage, onPageChanged, totalUsersCount, pageSize, newSearchText, users, followingInProgress, follow, unfollow, updateNewSearchText}, ...props) => {
    const FOLLOW = 'Подписаться'
    const UNFOLLOW = 'Отписаться'

    let newPostElement = React.createRef()

    let onFindSimilar = () => {
        let text = newPostElement.current.value
        let matchingResults = []
        for(let i in users.name ){
            if(i === text) {
                matchingResults.push(i)
            }
        }
        console.log(matchingResults)
    }

    let onNewSearchingTextChange = () => {
        let newSearchText = newPostElement.current.value
        updateNewSearchText(newSearchText)
        // TODO: Появляется ошибка, того, что updateNewSearchText - не является функцией
    }
 

    return (
        <div className={styles.wrapper}>
            <div className={styles.searchBox}>
                <h1>Поиск новых друзей</h1>
                <p>Ищите новых друзей здесь!</p>
                <textarea
                    onChange={onNewSearchingTextChange}
                    className={styles.textArea}
                    ref={newPostElement}
                    value={newSearchText}
                ></textarea>
                <button onClick={onFindSimilar}>Найти друга</button>
            </div>
            <div className={styles.container}>
                {
                    users.map(u => <div key={u.id}>
                        <div className={styles.userCardWrapper}>
                            <div className={styles.userImageContainer}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={styles.userImage} />
                                </NavLink>
                                <button disabled={followingInProgress
                                    .some(id => id === u.id)} 
                                    className={styles.profileBackgroundButtonChange}>                             
                                    {
                                        u.followed
                                            ? <button  onClick={() => {
                                                unfollow(u.id)
                                            }}>{UNFOLLOW}</button>
                                            : <button disabled={followingInProgress.some(id => id === u.id)} 
                                                onClick={() => {
                                                follow(u.id)
                                            }}>{FOLLOW}</button>
                                    }
                                </button>
                            </div>
                            <div className={styles.userInfo}>
                                <NavLink to={'/profile/' + u.id}>
                                    <h2>{u.name}</h2>
                                </NavLink>
                                <ul>
                                    <li>{u.status}</li>
                                    <li>
                                        Москва
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} 
            totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        </div>
    )
}



export default FindFriends