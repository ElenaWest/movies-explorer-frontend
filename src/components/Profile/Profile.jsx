import { NavLink } from 'react-router-dom';
import Form from '../Form/Form.jsx';
import './Profile.css';
import { useContext, useEffect } from 'react';
import { EMAIL_REGEX } from '../../utils/constants';
import Input from '../Input/Input.jsx';
import useFormValidation from '../../hooks/useFormValidation.js';
import CurrentUserContext from '../../context/CurrentUserContext.js';

function Profile({ name, editUserData, setIsError, logOut, isSuccessful, setSuccessful, setIsEdit, isEdit }) {
    const currentUser = useContext(CurrentUserContext)
    const { values, errors, isInputValid, isValid, handleChange, reset } = useFormValidation()

    useEffect(() => {
        reset({ username: currentUser.name, email: currentUser.email })
    }, [reset, currentUser, isEdit])

    function onSubmit(e) {
        e.preventDefault()
        editUserData(values.username, values.email)
    }

    return(
        <section className='profile'>
            <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
            <Form
              name={name}
              isValid={isValid}
              onSubmit={onSubmit}
              setIsError={setIsError}
              values={values}
              isSuccessful={isSuccessful}
              setSuccessful={setSuccessful}
              setIsEdit={setIsEdit}
              isEdit={isEdit}
            >
              <div className='profile__container-input'>
                <Input 
                  name='username'
                  type='text'
                  title='Имя'
                  value={values.username}
                  isInputValid={isInputValid.username}
                  error={errors.username}
                  onChange={handleChange}                
                  minLength={2}
                  maxLength={40}
                  selectname={name}
                  isEdit={isEdit}
                />
                <Input
                  name='email'
                  title='E-mail'
                  type='email'
                  value={values.email}
                  isInputValid={isInputValid.email}
                  error={errors.email}
                  onChange={handleChange}
                  pattern={EMAIL_REGEX}
                  isEdit={isEdit}
                  selectname={name}
                 />
              </div>               
            </Form>
            <NavLink to="/" className='profile__log-out' onClick={logOut}>Выйти из аккаунта</NavLink> 
        </section>
    )
  }
  
  export default Profile;