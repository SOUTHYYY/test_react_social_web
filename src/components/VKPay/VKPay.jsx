import React from 'react'
import styles from './VKPay.module.css'


const VKPay = (props) => {
    return (
        <div className={styles.vkPayWrapper}>
            <img src='https://weiseer.net/wp-content/uploads/2018/11/vkpay.png' alt="VK Pay" />
            <h1>Добро пожаловать в VK Pay</h1>
            <p>Платите за товары и услуги, а также переводите деньги друзьям прямо</p>
            <p> в приложении ВКонтакте.</p>
            <button>Продолжить</button>
            <div className={styles.checkbox}>
                <input type="checkbox" checked/>
                <label for="agree">Согласен с условиями оферты</label>
            </div>
        </div>
            )
        }
        
        
export default VKPay