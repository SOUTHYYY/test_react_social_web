import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends';


// {`${styles.nav} ${styles.item}`} - Применение 2х и более классов в className


const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
      </div>
      <div className={styles.item}>
        <a href='/news'>News</a>
      </div>
      <div className={styles.item}>
        <a href='/music'>Music</a>
      </div>
      <div className={styles.item}>
        <a href='/settings'>Settings</a>
      </div>
      <div className={styles.navbar_friends}>
        <h1>Friends</h1>
        <Friends state={props.state} />
      </div>
    </nav>
  );
}
export default Navbar