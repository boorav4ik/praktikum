import {
  emailValidation,
  loginValidation,
  nameValidation,
  passwordValidation,
  phoneValidation,
} from '../../utils/formInputValidators/validatorRules'

export const MapSignUpFields = [
  {
    label: 'Имя',
    validation: nameValidation,
  },
  {
    label: 'Фамилия',
    validation: nameValidation,
  },
  {
    label: 'Ник',
    validation: nameValidation,
  },
  {
    label: 'Логин',
    validation: loginValidation,
  },
  {
    label: 'Почта',
    validation: emailValidation,
  },
  {
    label: 'Телефон',
    validation: phoneValidation,
  },
  {
    label: 'Пароль',
    validation: passwordValidation,
  },
]
