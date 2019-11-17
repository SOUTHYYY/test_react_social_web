import React from 'react'
import styles from './ProfileInfo.module.css'

const FullProfileInfo = (props) => {

    return(
        <div className={styles.fullProfileInfo}>
            <h3>Основная инфомрация</h3>
            <p><span>Страна: </span>Россия</p>
            <p><span>Город: </span>Москва</p>
            <h3>Карьера</h3>
            <p><span>Место работы: </span>KGVNG</p>
            <h3>Образование</h3>
            <p><span>Вуз: </span>НИУ РАНХиГС (бывш. ВВАГС) '22</p>
            <p><span>Факультет: </span>
            Факультет управления (Государственного и муниципального управления)</p>
            <p><span>Кафедра/направление: </span>Кафедра информатики и информационных технологий</p>
            <p><span>Форма обучения: </span>Очное отделение</p>

        </div>
    )
}

export default FullProfileInfo