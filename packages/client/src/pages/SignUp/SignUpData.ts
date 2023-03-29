import {
  emailValidation,
  loginValidation,
  nameValidation,
  passwordValidation,
  phoneValidation,
} from '../../utils/formInputValidators/validatorRules'

export const MapSignUpFields = {
  first_name: {
    name: 'first_name',
    label: 'Имя',
    validation: nameValidation,
  },
  second_name: {
    name: 'second_name',
    label: 'Фамилия',
    validation: nameValidation,
  },
  display_name: {
    name: 'display_name',
    label: 'Ник',
    validation: nameValidation,
  },
  login: {
    name: 'login',
    label: 'Логин',
    validation: loginValidation,
  },
  email: {
    name: 'email',
    label: 'Почта',
    validation: emailValidation,
  },
  phone: {
    name: 'phone',
    label: 'Телефон',
    validation: phoneValidation,
  },
  password: {
    name: 'password',
    label: 'Пароль',
    validation: passwordValidation,
  },
} as const

export const MapSignUpFieldsTest = [
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
  // {
  //   name: 'display_name',
  //   label: 'Ник',
  //   validation: nameValidation,
  // },
  // {
  //   name: 'login',
  //   label: 'Логин',
  //   validation: loginValidation,
  // },
  // {
  //   name: 'email',
  //   label: 'Почта',
  //   validation: emailValidation,
  // },
  // {
  //   name: 'phone',
  //   label: 'Телефон',
  //   validation: phoneValidation,
  // },
  // {
  //   name: 'password',
  //   label: 'Пароль',
  //   validation: passwordValidation,
  // },
] as const
