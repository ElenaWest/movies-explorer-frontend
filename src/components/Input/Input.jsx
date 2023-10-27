import { useContext } from 'react';
import './Input.css';
import SendContext from '../../context/SendContext.js';

function Input({ selectname, name, type, title, value, isInputValid, error, onChange, pattern, isEdit, placeholder, minLength, maxLength }) {
    const isSend = useContext(SendContext)

    return(
        <>
          {selectname !== 'profile' ?
            <p className='input'>
              <label className='input__label'>{title}</label>
              <input
                name={name}
                type={type}
                placeholder={placeholder}
                className={`input__line ${isInputValid === undefined || isInputValid ? '' : 'input__line_invalid'}`}
                value={value || ''}
                onChange={onChange}
                autoComplete='on'
                disabled={isSend}
                pattern={pattern}
                minLength={minLength ? minLength : ''}
                maxLength={maxLength ? maxLength : ''}
                required
              />
              <span className='input__span'>{error}</span>
            </p>
            :
            <>
              <p className='profile__container-line'>
                <label className='profile__label'>{title}</label>
                <input
                  name={name}
                  type={type}
                  className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_invalid'}`}
                  value={value || ''}
                  onChange={onChange}
                  disabled={isSend}
                  pattern={pattern}
                  minLength={minLength ? minLength : ''}
                  maxLength={maxLength ? maxLength : ''}
                  required
                />
              </p>
              <span className='input__span input__span_profile'>{error}</span>
            </> 
          }
        </>
    )
}

export default Input;