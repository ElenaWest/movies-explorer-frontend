import { NavLink } from 'react-router-dom';
import './Profile.css';

function Profile() {
    return (
        <main className='profile'>
            <h1 className='profile__title'>Привет, Виталий!</h1>
            <form className='profile__container'>
                <p className='profile__container-input'>
                    <label for="name" className='profile__label profile__label-name'>Имя</label>
                    <input
                    name='name' 
                    type='name' 
                    placeholder='Виталий' 
                    className='profile__input'
                    minLength={2}
                    maxLength={40}
                    required
                    ></input>
                    <label for="email" className='profile__label profile__label-email'>E-mail</label>
                    <input
                    name='email' 
                    type='email' 
                    placeholder='pochta@yandex.ru' 
                    className='profile__input'
                    required
                    ></input>
                </p>
            </form>
                <button className='profile__edit' type='button'>Редактировать</button>
                <NavLink to="/" className='profile__log-out'>Выйти из аккаунта</NavLink>        
                {/* <span className='profile__error'>При обновлении профиля произошла ошибка.</span>
                <button className='profile__button' type='submit'>Сохранить</button> */}
        </main>
        
    )
  }
  
  export default Profile;