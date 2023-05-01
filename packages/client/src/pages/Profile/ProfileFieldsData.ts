import {
  emailValidation,
  loginValidation,
  nameValidation,
  passwordValidation,
  passwordValidationNew,
  passwordValidationConfrim,
  phoneValidation,
} from 'utils/validatorRules'

export const MapPasswordInputFields = [
  {
    name: 'oldPassword',
    label: 'Old Password',
    validation: passwordValidation,
    type: 'password',
  },
  {
    name: 'newPassword',
    label: 'New Password',
    validation: passwordValidationNew,
    type: 'password',
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    validation: passwordValidationConfrim,
    type: 'password',
  },
]

export const MapProfileInputFields = [
  {
    name: 'first_name',
    label: 'Имя',
    validation: nameValidation,
    value: '',
  },
  {
    name: 'second_name',
    label: 'Фамилия',
    validation: nameValidation,
    value: '',
  },
  {
    name: 'display_name',
    label: 'Ник',
    validation: nameValidation,
    value: '',
  },
  {
    name: 'login',
    label: 'Логин',
    validation: loginValidation,
    value: '',
  },
  {
    name: 'email',
    label: 'Почта',
    validation: emailValidation,
    value: '',
  },
  {
    name: 'phone',
    label: 'Телефон',
    validation: phoneValidation,
    value: '',
  },
]
