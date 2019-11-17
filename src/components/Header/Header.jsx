import React from 'react'
import styles from './Header.module.css'
import {NavLink, Redirect} from 'react-router-dom'
import downwardsPointer from '../../image/downwards-pointer.svg'
import downwardsPointerGray from '../../image/downwardsPointerGray.svg'



const Header = (props) => {
  
    return(
        <header className={styles.headerWrapper}>
          <div className={styles.header}>
            <img src="https://vk.com/images/brand/vk-logo--fb.png" alt="brabd-logo"></img>
            <div className={styles.loginBlock}>
              {props.isAuth? 
              <div>
                <div>
                  {props.login}
                  <img src={downwardsPointerGray} alt=""/>
                </div>
                {/* <div className={styles.dropDownMenu}>
                  <ul>
                    <li>
                      <NavLink to={'/profile'}>Моя страница</NavLink>
                    </li>
                    <hr/>
                    <li>
                      <NavLink to={'/profile'}>Редактировать</NavLink>
                    </li>
                    <li>Настройки</li>
                    <li>Помощь</li>
                    <hr/>
                    <li >
                      <NavLink to={'/login'} onClick={props.logout}>Выйти</NavLink>
                    </li>
                  </ul>
                </div> */}
              </div>
                : <NavLink to={'/login'} className={styles.isEnter}>Войти</NavLink>
              }
            </div>
          </div>
        </header>
      
    );
}
export default Header