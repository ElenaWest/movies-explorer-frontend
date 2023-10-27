import { useCallback, useState } from "react";

function useFormValidation() {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [isValid, setIsValid] = useState(false)
    const [isInputValid, setIsInputValid] = useState({})

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        const validationMessage = e.target.validationMessage
        const valid = e.target.validity.valid
        const form = e.target.form

        setValues((oldValues) => {
            return { ...oldValues, [name]: value }
        })

        setErrors((oldErrors) => {
            return { ...oldErrors, [name]: validationMessage }
        })

        setIsInputValid((oldIsInputValid) => {
            return { ...oldIsInputValid, [name]: valid }
        })        

        setIsValid(form.checkValidity())
    }

    const reset = useCallback((data={}) => {
        setValues(data)
        setErrors({})
        setIsValid(false)
        setIsInputValid({})
    },[])

    const setValue = useCallback((name, value) => {
        setValues((oldValues) => {
            return { ...oldValues, [name]: value }
        })
    }, [])

    return { values, errors, isValid, isInputValid, handleChange, reset, setValue }
}

export default useFormValidation;