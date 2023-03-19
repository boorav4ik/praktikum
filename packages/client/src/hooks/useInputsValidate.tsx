import { useState, FocusEvent, ChangeEvent } from 'react'
import { initialState } from '../utils/formInputValidators'
import { ValidateProps } from './interfaces/useInputsValidate'

export function useInputsValidate(
  validateOnChange = false,
  validate: (name: object, errors: object) => ValidateProps
) {
  const [errors, setErrors] = useState<ValidateProps>(initialState)
  const [values, setValues] = useState<ValidateProps>(initialState)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (validateOnChange) {
      if (name === 'newPassword' && value && value === values.oldPassword) {
        const errorValidate = validate({ [name]: 'equalOld' }, errors)
        setErrors(errorValidate)
        return
      }
      if (name === 'confirmPassword' && value && value !== values.newPassword) {
        const errorValidate = validate({ [name]: 'equalConfirm' }, errors)
        setErrors(errorValidate)
        return
      }
      const errorValidate = validate({ [name]: value }, errors)
      setErrors(errorValidate)
    }
  }

  const checkEmptyInputs = (value: object) => {
    const errorValidate = validate(value, errors)
    setErrors(errorValidate)
  }

  return {
    values,
    handleInputChange,
    errors,
    handleInputBlur,
    checkEmptyInputs,
  }
}
