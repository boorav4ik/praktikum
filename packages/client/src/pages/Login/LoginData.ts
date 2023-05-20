import { loginValidation, passwordValidation } from 'utils/validatorRules'

export const MapLoginFields = [
  {
    label: 'Логин',
    validation: loginValidation,
  },
  {
    label: 'Пароль',
    validation: passwordValidation,
    type: 'password',
  },
]
