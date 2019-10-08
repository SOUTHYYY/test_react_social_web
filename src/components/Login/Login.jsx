import React from 'react'
import styles from './Login.module.css'

const Login = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form action="" method='post'>
                    <h1>Еще не зарегестрированны?</h1>
                    <div className={styles.string}>
                        <label htmlFor='email' placeholder>Введите email</label>
                        <input type="text" name='email'/>
                    </div>
                    <div className={styles.string}>
                        <label htmlFor="password">Придумайте пароль</label>
                        <input type="text" name='password'/>
                    </div>
                    <div className={styles.acceptRegistrationСontainer}>
                        <button className={styles.acceptRegistrationButton}>Зарегистрироватсья</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login