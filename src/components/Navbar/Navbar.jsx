import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import FriendsContainer from './Friends/FriendsContainer.jsx';



// {`${styles.nav} ${styles.item}`} - Применение 2х и более классов в className


const Navbar = (props) => {
  return (
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
          <a href='/settings'>Настройки</a>
        </div>
        <div className={styles.navbar_friends}>
          <h1>Друзья</h1>
          <FriendsContainer /> 
        </div>
        <div className={styles.findFriendsButton}>
          <NavLink to='/find-friends' activeClassName={styles.activeLink}>Найти друзей</NavLink>
        </div>
      </nav>
  );
}
export default Navbar