import { useState } from 'react'

const useInput = (validate) => {
    // get user input
    const [value, setValue] = useState('')
    // get if input field is touched
    const [isTouched, setTouched] = useState(false)
// it is valid if the input passes the check
    const Valid = validate(value)
    // invalid if the input field conditio is not true and it is touched
    const isInvalid = !Valid && isTouched;

    const valueChangeHandler = (event) => {
        setValue(event.target.value)
    }

    const blurHandler = () => {
        setTouched(true)
    }

    return {
        value,
        Valid,
        isInvalid,
        valueChangeHandler,
        blurHandler,
    }

}

export default useInput;