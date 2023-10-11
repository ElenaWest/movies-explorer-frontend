import { NavLink } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile({ loggedIn }) {
    return (
        <>
        <Header loggedIn={loggedIn} />
        <main className='profile'>
            <h1 className='profile__title'>Привет, Виталий!</h1>
            <form className='profile__container' name='profile'>
                <div className='profile__container-input'>
                    <p className='profile__container-line'>
                        <label htmlFor="name" className='profile__label'>Имя</label>
                        <input
                        name='name'
                        id='name'
                        type='text' 
                        placeholder='Виталий' 
                        className='profile__input'
                        minLength={2}
                        maxLength={40}
                        required
                        disabled
                        ></input>
                    </p>
                    <p className='profile__container-line'>   
                        <label htmlFor="email" className='profile__label'>E-mail</label>
                        <input
                        name='email'
                        id='email'
                        type='email' 
                        placeholder='pochta@yandex.ru' 
                        className='profile__input'
                        required
                        disabled
                        ></input>
                    </p>
                </div>
            </form>
                <button className='profile__edit' type='button'>Редактировать</button>
                <NavLink to="/" className='profile__log-out'>Выйти из аккаунта</NavLink>        
                {/* <span className='profile__error'>При обновлении профиля произошла ошибка.</span>
                <button className='profile__button' type='submit'>Сохранить</button> */}
        </main>
        </>
    )
  }
  
  export default Profile;