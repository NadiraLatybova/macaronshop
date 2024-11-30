import React from 'react'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Link, Navigate} from 'react-router-dom'
import {loginUser} from "../../store/reducers/user";
import './Login.scss'
import { IoIosEyeOff ,IoIosEye} from "react-icons/io";

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({mode: "onBlur"})

    const {user, status,error}= useSelector(s =>s.user)


    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = React.useState(false);

    const submitForm =(data)=>{

        dispatch(loginUser(data))



    }

    if  (status === 'success'){
        return <Navigate to={'/'}/>
    }

    return (


        <div className="register-page">
            <form className="register__form" onSubmit={handleSubmit(submitForm)}>
                <h2>Вход в аккаунт</h2>
                <div className="register__content">
                    <div className="register__inputs">
                        <input {...register('email')} placeholder='Эл.почта' type="email" />

                    </div>
                    <div className="register__block">
                        <div className="password-field">
                            <input
                                {...register('password')}
                                placeholder='Пароль'
                                type={showPassword ? 'text' : 'password'}
                                className="password-input"
                            />
                            <span
                                className="password-toggle-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ?<IoIosEye />:  <IoIosEyeOff /> }
                            </span>
                        </div>

                    </div>
                </div>
                <button type="submit" className="register__submit">Войти</button>
                <p className='register__text'>
                    У вас ещё нет аккаунта? <Link className='register__link' to='/register'>Зарегистрироваться</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;