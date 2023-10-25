import { useContext, useEffect } from 'react';
import './Form.css';
import SendContext from '../../context/SendContext.js';
import ErrorContext from '../../context/ErrorContext.js';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext.js';

function Form({ name, children, isValid, onSubmit, setIsError, values, isSuccessful, setSuccessful, setIsEdit, isEdit }) {
    const location = useLocation()
    const isError = useContext(ErrorContext)
    const isSend = useContext(SendContext)
    const currentUser = useContext(CurrentUserContext)

    useEffect(() => {
        setIsError(false)
    }, [setIsError])

    useEffect(() => {
        if (location.pathname === '/profile') {
            setSuccessful(false)
            setIsEdit(false)
        }
    }, [setSuccessful, setIsEdit, location])

    return(
        <form noValidate name={name} onSubmit={onSubmit}>
            {children}
            {name === 'signin' ?
            <div className='form'>
              <span className={`form__span ${isError ? 'form__span_active' : isSuccessful && 'form__span_disabled'}`}>{'При авторизации произошла ошибка'}</span>
              <button
              type='submit'
              className={`form__button ${isValid && !isError ? '' : 'form__button_disabled'}`}
              disabled={!isValid || isSend || isError}
              >{isSend ? <Preloader /> : 'Войти'}</button>
            </div>
            :
            name === 'signup' ?
              <div className='form'>
                <span className={`form__span form__span-register ${isError ? 'form__span_active' : isSuccessful && 'form__span_disabled'}`}>{'При регистрации произошла ошибка.'}</span>
                <button
                type='submit'
                className={`form__button ${isValid && !isError ? '' : 'form__button_disabled'}`}
                disabled={!isValid || isSend || isError}
                >{isSend ? <Preloader /> : 'Зарегистрироваться'}</button>
              </div>
              : !isEdit ?
              <div className='profile__container'>
                <span className={`profile__error ${isError ? 'profile__error_active' : isSuccessful && 'profile__error_type_success'}`}>{isError ? 'При обновлении профиля произошла ошибка.' : 'Данные успешно изменены'}</span>          
                <button 
                className='profile__edit' 
                type='button'
                onClick={() => {
                    setIsEdit(true)
                    setSuccessful(false)
                }}>{'Редактировать'}</button>              
              </div> :
              <div className='profile__container'>
                <span className={`profile__error ${isError ? 'profile__error_active' : isSuccessful && 'profile__error_type_success'}`}>{isError ? 'При обновлении профиля произошла ошибка.' : 'Данные успешно изменены'}</span>
                <button
                  className={`profile__button ${(values.username === currentUser.name && values.email === currentUser.email) || !isValid || isError ? 'profile__button_disabled' : ''}`} 
                  type='submit'
                  disabled={!isValid || isSend || isError}>{isSend ? <Preloader /> : 'Сохранить'}</button>
              </div>
             }
        </form>
    )
}

export default Form;