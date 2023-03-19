import { ValidateProps } from '../../hooks/interfaces/useInputsValidate'
import { validateMatchString, validatePasswordRegex } from './validatorRules'

export function validate(fieldValues: any, errors: object): ValidateProps {
  const currentError: any = { ...errors }
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
