import React from 'react'
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  
    return(
        <header className={styles.header}>
          <img src="https://vk.com/images/brand/vk-logo--fb.png" alt=""></img>
          <div className={styles.loginBlock}>
            {props.isAuth? props.login
              : <NavLink to={'/login'} className={styles.isEnter}>Войти</NavLink>
            }
          </div>
        </header>
      
    );
}
export default Header