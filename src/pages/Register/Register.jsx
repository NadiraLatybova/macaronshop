import React from 'react';
import './Register.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/reducers/user';
import { Link, Navigate } from 'react-router-dom';
import { IoIosEyeOff, IoIosEye } from "react-icons/io";


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });
    const { user, status, error } = useSelector(s => s.user);
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const submitForm = (data) => {
        const { confirmPassword, ...other } = data;
        dispatch(registerUser(other));
    };

    if (status === 'success') {
        return <Navigate to={'/'} />;
    }

    return (
        <div className="register-page">
            <form className="register__form" onSubmit={handleSubmit(submitForm)}>
                <h2>Пройдите регистрацию</h2>
                <div className="register__content">
                    <div className="register__inputs">
                        <input {...register('email')} placeholder='Эл.почта' type="email" />
                        <input {...register('name')} placeholder='Имя' type="text" />
                        <input {...register('age')} placeholder='Ваш возраст' type="number" />
                        <input {...register('age')} placeholder='Ваш телефон номер' type="tel" />
                    </div>
                    <div className="register__block">
                        <div className="password-field">
                            <input
                                {...register('password')}
                                placeholder='Придумайте пароль'
                                type={showPassword ? 'text' : 'password'}
                                className="password-input"
                            />
                            <span
                                className="password-toggle-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <IoIosEye /> :<IoIosEyeOff /> }
                            </span>
                        </div>
                        <div className="password-field">
                            <input
                                {...register('confirmPassword')}
                                placeholder='Повторите пароль'
                                type={showConfirmPassword ? 'text' : 'password'}
                                className="password-input"
                            />
                            <span
                                className="password-toggle-icon"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <IoIosEye /> :<IoIosEyeOff /> }
                            </span>
                        </div>
                    </div>
                </div>
                <button type="submit" className="register__submit">Регистрация</button>
                <p className='register__text'>
                    Есть аккаунт? <Link className='register__link' to='/login'>Вход</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
