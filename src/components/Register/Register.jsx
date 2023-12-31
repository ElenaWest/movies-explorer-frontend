import Logo from '../Logo/Logo';
import './Register.css';
import { NavLink } from 'react-router-dom';

function Register() {
    return (
        <main className='register'>
            <div className='register__container'>
                <Logo />
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='register__form'  name='register'>
                    <p className='register__form-input'>
                        <label className='register__label' htmlFor='name'>Имя</label>
                        <input
                        name='name'
                        id='name'
                        type='text' 
                        placeholder='Имя'
                        defaultValue='Виталий' 
                        className='register__input'
                        minLength={2}
                        maxLength={40}
                        required
                        ></input>
                        <span className='register__span'></span>
                        <label className='register__label' htmlFor='email'>E-mail</label>
                        <input
                        name='email'
                        id='email'
                        type='email' 
                        placeholder='Почта'
                        defaultValue='pochta@yandex.ru'
                        className='register__input'
                        required
                        ></input>
                        <span className='register__span'></span>
                        <label className='register__label' htmlFor='password'>Пароль</label>
                        <input
                        name='password'
                        id='password'
                        type='password' 
                        placeholder='Пароль' 
                        className='register__input'
                        minLength={4}
                        required
                        ></input>
                        <span className='register__span'>Что-то пошло не так...</span>
                        <button type='submit' className='register__button'>Зарегистрироваться</button>
                    </p>
                </form>
                <div className='register__question-container'>
                    <p className='register__question'>Уже зарегистрированы?</p>
                    <NavLink to="/signin" className='register__login'>Войти</NavLink>
                </div>
            </div>                   
        </main>        
    )
  }
  
  export default Register;