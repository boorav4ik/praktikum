export {
  validateEmailRegex,
  validateLoginRegex,
  validateNameRegex,
  validateNotEmptyValue,
  validatePasswordRegex,
  validatePhoneRegex,
} from './validatorRules'

export const initialState = {
  first_name: '',
  second_name: '',
  display_name: '',
  login: '',
  email: '',
  password: '',
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
}
