import {
  emailValidation,
  loginValidation,
  nameValidation,
  passwordValidation,
  phoneValidation,
} from '../../utils/formInputValidators/validatorRules'

export const MapSignUpFields = [
  {
    name: 'first_name',
    label: 'Имя',
    validation: nameValidation,
  },
  {
    name: 'second_name',
    label: 'Фамилия',
    validation: nameValidation,
  },
  {
    name: 'display_name',
    label: 'Ник',
    validation: nameValidation,
  },
  {
    name: 'login',
    label: 'Логин',
    validation: loginValidation,
  },
  {
    name: 'email',
    label: 'Почта',
    validation: emailValidation,
  },
  {
    name: 'phone',
    label: 'Телефон',
    validation: phoneValidation,
  },
  {
    name: 'password',
    label: 'Пароль',
    validation: passwordValidation,
  },
] as const
