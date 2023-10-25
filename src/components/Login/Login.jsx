import { EMAIL_REGEX } from '../../utils/constants';
import Input from '../Input/Input.jsx';
import EntryForm from '../EntryForm/EntryForm.jsx';
import useFormValidation from '../../hooks/useFormValidation.js';

function Login({ name, onLogin, setIsError }) {
    const { values, errors, isInputValid, isValid, handleChange } = useFormValidation()

    function onSubmit(e) {
        e.preventDefault()
        onLogin(values.email, values.password)
    }

    return (
        <EntryForm name={name} isValid={isValid} onSubmit={onSubmit} setIsError={setIsError}>
            <Input
              name='email'
              title='E-mail'
              type='email'
              placeholder={"Электронная почта"}
              value={values.email}
              isInputValid={isInputValid.email}
              error={errors.email}
              onChange={(e) => {
                handleChange(e)
                setIsError(false)
              }}
              pattern={EMAIL_REGEX}
            />
            <Input
               name="password"
               title="Пароль"
               type="password"
               placeholder={"Введите пароль"}
               value={values.password}
               isInputValid={isInputValid.password}
               error={errors.password}
               onChange={(e) => {
                 handleChange(e)
                 setIsError(false)
               }}
               minLength={4}
            />
        </EntryForm>
    )
  }
  
  export default Login;