import React from 'react'
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'
import downwardsPointerGray from '../../image/downwardsPointerGray.svg'



const Header = ({isAuth, login}) => {
  
    return(
        <header className={styles.headerWrapper}>
          <div className={styles.header}>
            <img src="https://vk.com/images/brand/vk-logo--fb.png" alt="brabd-logo"></img>
            <div className={styles.loginBlock}>
              {isAuth? 
              <div>
                <div>
                  {login}
                  <img src={downwardsPointerGray} alt=""/>
                </div>
              </div>
                : <NavLink to={'/login'} className={styles.isEnter}>Войти</NavLink>
              }
            </div>
          </div>
        </header>
      
    );
}
export default Header