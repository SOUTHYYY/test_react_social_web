import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import FriendsContainer from './Friends/FriendsContainer.jsx';
import VKPayImage from '../../image/VKPay.svg'
import FindFriendImage from '../../image/add-friend.svg'



// {`${styles.nav} ${styles.item}`} - Применение 2х и более классов в className


const Navbar = () => {
  return (
    <div className={styles.wrapperNav}>
      <nav className={styles.nav}>
        <div className={styles.item}>
          <NavLink to='/profile' activeClassName={styles.activeLink}>Профиль</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/dialogs' activeClassName={styles.activeLink}>Сообщения</NavLink>
        </div>
        <div className={styles.item}>
          <a href='/news'>Новости</a>
        </div>
        <div className={styles.item}>
          <a href='/music'>Музыка</a>
        </div>
        <div className={styles.item}>
          <NavLink to='/settings' activeClassName={styles.activeLink}>Насройки</NavLink>
        </div>
        <div className={styles.navbar_friends}>
          <h1>Друзья</h1>
          <FriendsContainer />
        </div>
        <div className={styles.findFriendsButton}>
          <NavLink to='/find-friends' activeClassName={styles.activeLink}>
            <img src={FindFriendImage} alt="Найти друзей" />
            Найти друзей
          </NavLink>
        </div>
        <div className={styles.VKPayWrapper}>
          <NavLink to='/vkpay' activeClassName={styles.activeLink}>
            <div className={styles.VKPay}>
              <img src={VKPayImage} alt="VK Pay" />
              VK Pay
            </div>
          </NavLink>
        </div>
        <div className={styles.servises}>
          <h1>Сервисы</h1>
        </div>
      </nav>
    </div>
  );
}
export default Navbar