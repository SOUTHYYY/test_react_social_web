import React from 'react'
import styles from './FindFriends.module.css'
import userPhoto from '../../image/default_user.jpg'
import { NavLink } from 'react-router-dom'




let FindFriends = (props) => {
    debugger

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    debugger
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        debugger
    }
    
    let newPostElement = React.createRef()

    let onFindSimilar = () => {
        let text = newPostElement.current.value
        let matchingResults = []
        for(let i in props.users.name ){
            if(i === text) {
                matchingResults.push(i)
            }
        }
        console.log(matchingResults)
    }

    let onNewSearchingTextChange = () => {
        let newSearchText = newPostElement.current.value
        props.updateNewSearchText(newSearchText)
        // TODO: Появляется ошибка, того, что updateNewSearchText - не является функцией
    }
 

    return (
        <div className={styles.wrapper}>
            <div className={styles.searchBox}>
                <h1>Поиск новых друзей</h1>
                <textarea
                    onChange={onNewSearchingTextChange}
                    className={styles.textArea}
                    ref={newPostElement}
                    value={props.newSearchText}
                ></textarea>
                <button onClick={onFindSimilar}>Найти друга</button>
            </div>
            <div className={styles.container}>
                {
                    props.users.map(u => <div key={u.id}>
                        <div className={styles.userCardWrapper}>
                            <div className={styles.userImageContainer}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={styles.userImage} />
                                </NavLink>
                                <button disabled={props.followingInProgress.some(id => id === u.id)} className={styles.profileBackgroundButtonChange} >                                
                                    {
                                        u.followed
                                            ? <button  onClick={() => {
                                                props.unfollow(u.id)
                                            }}>Отписаться</button>
                                            : <button disabled={props.followingInProgress.some(id => id === u.id)} 
                                                onClick={() => {
                                                props.follow(u.id)
                                            }}>Подписаться</button>
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
            <div className={styles.pages}>

                {pages.map(p => {
                    debugger
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
        </div>
    )
}



export default FindFriends