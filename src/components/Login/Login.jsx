import { NavLink } from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';

function Login() {
    return (
        <main className='login'>
            <div className='login__container'>
                <Logo />
                <h1 className='login__title'>Рады видеть!</h1>
                <form className='login__form' name='login'>
                    <p className='login__form-input'>
                        <label className='login__label' htmlFor='email' >E-mail</label>
                        <input
                        name='email'
                        id='email' 
                        type='email' 
                        placeholder='Почта'
                        defaultValue='pochta@yandex.ru'
                        className='login__input'
                        required
                        ></input>
                        <span className='login__span'></span>
                        <label className='login__label' htmlFor='password'>Пароль</label>
                        <input
                        name='password'
                        id='password'
                        type='password' 
                        placeholder='Пароль' 
                        className='login__input'
                        minLength={4}
                        required
                        ></input>
                        <span className='login__span'></span>
                        <button type='submit' className='login__button'>Войти</button>
                    </p>
                </form>
                <div className='login__question-container'>
                    <p className='login__question'>Ещё не зарегистрированы?</p>
                    <NavLink to="/signup" className='login__registration'>Регистрация</NavLink>
                </div>
            </div>
        </main>        
    )
  }
  
  export default Login;