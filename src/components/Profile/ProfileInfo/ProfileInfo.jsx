import React, { useState } from 'react'
import styles from './ProfileInfo.module.css'
import defaultUserPhoto from '../../../image/img1.jpg'
import ProfileStatus from './ProfileStatus'
import PageInfoBar from './PageInfoBar'
import FullProfileInfo from './FullProfileInfo'
import FriendItem from './FriendItem.jsx'
import presentPhoto from '../../../image/present.png'
import moreOptions from '../../../image/more-options.svg'
import MyPostsContainer from '../MyPosts/MyPostsContainer';
import {customAPI} from '../../../API/api'

const ProfileInfo = ({profile, users, pageInfoBar, updateUserStatus, status}) => {

    const myLocalData = customAPI.getCustomUsers()
    console.log('myLocalData is: ', myLocalData)

    const [isFullInfoOpen, setIsFullInfoOpen] = useState(false)

    if (!profile) {
        return null
    }
    let pageInfoBarItems = pageInfoBar.map(e =>
        <PageInfoBar
            name={e.name}
            count={e.count}
            key={e.id}
            id={e.id} />
    )

    let allFriends = users.map(user =>
        <FriendItem
            name={user.name}
            photo={user.photos.small}
            key={user.id}
            id={user.id} />)

    return (
        <div className={styles.profileWrapper}>
            <div className={styles.descriptionBlock}>
                <div className={styles.leftBlock}>
                    <div className={styles.profileAllMainWrapper}>
                        {profile.photos.large !== null ?
                            <img src={profile.photos.large} alt='user'></img>
                            :
                            <img src={defaultUserPhoto} alt='user'></img>
                        }
                        <div className={styles.imageNavBlock}>
                            <button>Изменить</button>
                            <button>
                                <img src={moreOptions} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className={styles.presents}>
                        Подарки 365
                        <div className={styles.itemsWrapper}>
                            <img src={presentPhoto} alt="" />
                            <img src={presentPhoto} alt="" />
                            <img src={presentPhoto} alt="" />
                        </div>
                    </div>
                    <div className={styles.friendsWrapper}>
                        <div className={styles.allFriends}>
                            Друзья 350
                            <div className={styles.itemsWrapper}>
                                {
                                    allFriends
                                }
                            </div>
                        </div>
                        <div className={styles.onlineFriends}>
                            Друзья онлайн 100
                            <div className={styles.itemsWrapper}>
                                {
                                    allFriends
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.infoBLock}>
                        <div className={styles.mainInfo}>
                            <h1>{profile.fullName}</h1>
                            <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
                            <div className={styles.statusInfo}>
                                <span>{profile.statusInfo}</span>
                            </div>
                            <hr />
                        </div>
                        <div className={styles.profileInfo}>
                            <p><span>День рождения: </span>30 июля 1916 г.</p>
                            <p><span>Город: </span>Москва</p>
                            <p><span>Семейное положение:</span> не женат</p>
                            <p><span>Братья, сестры: </span> Иван Демуцкий, Кристиан Гришин, Степа Шарыпов</p>
                            <p><span>Сын: </span>Дамир Малеков</p>
                            <div className={styles.getFullInfoButton} onClick={() => {
                                if (isFullInfoOpen === false) {
                                    setIsFullInfoOpen(true)

                                }
                                if (isFullInfoOpen === true) {
                                    setIsFullInfoOpen(false)

                                }
                            }}>{isFullInfoOpen ? 'Скрыть информацию' : 'Показать полную информацию'}</div>
                            {
                                isFullInfoOpen ? <FullProfileInfo /> : null
                            }
                        </div>
                        <div className={styles.pageInfoBarContainer}>
                            {
                                pageInfoBarItems
                            }
                        </div>
                        <div className={styles.myPhotosWrapper}>
                            <div className={styles.myPhotosInfo}>
                                <span>Мои фотографии</span>
                                <span>2</span>
                            </div>
                            <div className={styles.photos}>
                                <div className={styles.photosItem}>
                                    <img src="https://sun9-3.userapi.com/c855024/v855024603/ac9db/KIA7HxHbEo4.jpg" alt="1" />
                                </div>
                                <div className={styles.photosItem}>
                                    <img src="https://sun9-51.userapi.com/c857428/v857428348/21cbd/6qXFDKaaZo0.jpg" alt="2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <MyPostsContainer />
                </div>
            </div>
        </div>

    )
}





export default ProfileInfo