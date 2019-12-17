import React from 'react'
import styles from './Settings.module.css'
import { NavLink } from 'react-router-dom'

const Settings = (props) => {
    return (
        <div className={styles.settings}>
            <div className={styles.settings_general}>
                <h3>Общее</h3>
                <span>Меню сайта</span>
                <span>Настройки профиля</span>
                <span>Настройки контента</span>
                <span>Пароль</span>
                <span>Электронная почта</span>
                <span>Номер телефона</span>
                <span>Адрес страницы</span>
                <span>Язык</span>
            </div>
            <div className={styles.settings_navigation}>
                <ul>
                    <li>
                        <NavLink to='/' activeClassName={styles.settings_navigation__active}>Общее</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName={styles.settings_navigation__active}>Безопасность</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName={styles.settings_navigation__active}>Приватность</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName={styles.settings_navigation__active}>Уведомления</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName={styles.settings_navigation__active}>Черный список</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName={styles.settings_navigation__active}>Настройки приложения</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName={styles.settings_navigation__active}>Мобильные сервисы</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName={styles.settings_navigation__active}>Платежи, Подписки, Переводы</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Settings