import { ValidateProps } from 'hooks/interfaces/useInputsValidate'
import {
  validateEmailRegex,
  validateLoginRegex,
  validateMatchString,
  validateNameRegex,
  validatePasswordRegex,
  validatePhoneRegex,
} from './validatorRules'

export function validate(fieldValues: any, errors: object): ValidateProps {
  const currentError: any = { ...errors }
  if ('first_name' in fieldValues)
    currentError.first_name = validateNameRegex(fieldValues.first_name)
  if ('second_name' in fieldValues)
    currentError.second_name = validateNameRegex(fieldValues.second_name)
  if ('display_name' in fieldValues)
    currentError.display_name = validateNameRegex(fieldValues.display_name)
  if ('login' in fieldValues)
    currentError.login = validateLoginRegex(fieldValues.login)
  if ('email' in fieldValues)
    currentError.email = validateEmailRegex(fieldValues.email)
  if ('phone' in fieldValues)
    currentError.phone = validatePhoneRegex(fieldValues.phone)
  if ('oldPassword' in fieldValues)
    currentError.oldPassword = validatePasswordRegex(fieldValues.oldPassword)
  if ('newPassword' in fieldValues)
    currentError.newPassword = validatePasswordRegex(fieldValues.newPassword)
  if ('newPassword' in fieldValues && fieldValues.newPassword === 'equalOld')
    currentError.newPassword = validateMatchString('equalOld')
  if ('confirmPassword' in fieldValues)
    currentError.confirmPassword = validatePasswordRegex(
      fieldValues.confirmPassword
    )
  if (
    'confirmPassword' in fieldValues &&
    fieldValues.confirmPassword === 'equalConfirm'
  )
    currentError.confirmPassword = validateMatchString('equalConfirm')

  return { ...currentError }
}
