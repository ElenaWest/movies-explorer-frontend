import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './EntryForm.css';
import Form from '../Form/Form.jsx';

function EntryForm({ name, children, isValid, onSubmit, setIsError }){
    return(
        <section className='entry-form'>
            <Logo />
            <h1 className='entry-form__title'>{name === 'signin' ? 'Рады видеть!' : 'Добро пожаловать!'}</h1>
            <Form name={name} isValid={isValid} onSubmit={onSubmit} setIsError={setIsError}>{children}</Form>            
              {name === 'signin' ?
                <div className='entry-form__question-container'>
                  <p className='entry-form__question'>Ещё не зарегистрированы?</p>
                  <NavLink to="/signup" className='entry-form__link'>Регистрация</NavLink>
                </div>  
              : name === 'signup' ?
                <div className='entry-form__question-container'>
                  <p className='entry-form__question'>Уже зарегистрированы?</p>
                  <NavLink to="/signin" className='entry-form__link'>Войти</NavLink>
                </div>  
              :
              <NavLink to="/">Выйти из аккаунта</NavLink>                
            }
        </section>
    )
}

export default EntryForm;