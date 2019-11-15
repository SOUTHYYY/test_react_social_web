import React from 'react'
import styles from './Login.module.css'
import { reduxForm, Field} from 'redux-form'
import { Input} from '../Common/FormsControl/FormsControl'
import {createField} from '../Common/FormsControl/FormsControl'
import { required, maxLengthCreator } from '../Utils/Validators/validator'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reduser'
import { Redirect } from 'react-router-dom'
import error from '../Common/FormsControl/FormsControl.module.css'

const maxLength30 = maxLengthCreator(30)

const LoginForm = ({ handleSubmit, onSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit} >

            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input)}
            <div>
                <Field component={'input'} name={'rememberMe'} type={"checkbox"} />Запомнить меня
            </div>
            {error &&
                <div className={error.formSummaryError}>
                    {error}
                </div>
            }
            <div className={styles.acceptRegistrationСontainer}>
                <button className={styles.acceptRegistrationButton}
                    onClick={onSubmit}>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={styles.container}>
            <h1>Еще не зарегестрированны?</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)