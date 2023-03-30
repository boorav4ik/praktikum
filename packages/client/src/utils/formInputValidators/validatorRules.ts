const REQUIRED_FIELD = 'Обязательно для заполнения'

export function validateNotEmptyValue(value: string): string {
  if (value === '') {
    return 'Пустое поле'
  }

  return ''
}

export function validateLoginRegex(value: string): string {
  if (value.length < 3) {
    return 'Длина должна состовлять не менее 3 символов'
  }
  if (!value.match('^[a-zA-Z0-9_-]+$')) {
    return 'Только латиниские буквы, цифры'
  }
  if (!value.match('[a-zA-Z]+')) {
    return 'Только буквы'
  }
  if (value.length > 20) {
    return 'Длина логина состовлять не более 20 символов'
  }

  return ''
}

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 3) {
      return 'Длина должна состовлять не менее 3 символов'
    }
    if (!value.match('^[a-zA-Z0-9_-]+$')) {
      return 'Только латиниские буквы, цифры'
    }
    if (!value.match('[a-zA-Z]+')) {
      return 'Только буквы'
    }
    if (value.length > 20) {
      return 'Длина логина состовлять не более 20 символов'
    }

    return true
  },
}

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 8) {
      return 'Длина должна состовлять не менее 8 символов'
    }
    if (!value.match('[A-Z]+')) {
      return 'Пароль должен сожержать хотя бы одну заглавную букву'
    }
    if (!value.match('[0-9]+')) {
      return 'Пароль должен сожержать хотя бы одну цифру'
    }
    if (value.length > 40) {
      return 'Длина логина состовлять не более 40 символов'
    }

    return true
  },
}

export const nameValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    console.log('validate value = ', value)
    if (!value.match('^[а-яА-Яa-zA-Z]+$')) {
      return 'Только латиниские буквы или кирилицу, цифры'
    }
    if (!value.match('^[А-ЯA-Z]')) {
      return 'Должно начинаться с заглавной буквы'
    }

    return true
  },
}

export const phoneValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (!value.match(`^[+]?[\\d]+$`)) {
      return 'Только цифра без + в начале'
    }
    if (!(value.length >= 10 && value.length <= 15)) {
      return 'от 10 до 15 символов'
    }

    return true
  },
}

export const emailValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (!value.match('^[a-zA-z]+[a-zA-Z\\d-_]*@[a-z]+\\.')) {
      return 'Неправильный email'
    }

    return true
  },
}

export function validatePasswordRegex(value: string): string {
  if (value.length < 8) {
    return 'Длина должна состовлять не менее 8 символов'
  }
  if (!value.match('[A-Z]+')) {
    return 'Пароль должен сожержать хотя бы одну заглавную букву'
  }
  if (!value.match('[0-9]+')) {
    return 'Пароль должен сожержать хотя бы одну цифру'
  }
  if (value.length > 40) {
    return 'Длина логина состовлять не более 40 символов'
  }

  return ''
}

export function validateNameRegex(value: string): string {
  if (!value.match('^[а-яА-Яa-zA-Z]+$')) {
    return 'Только латиниские буквы или кирилицу, цифры'
  }
  if (!value.match('^[А-ЯA-Z]')) {
    return 'Должно начинаться с заглавной буквы'
  }

  return ''
}

export function validatePhoneRegex(value: string): string {
  if (!value.match(`^[+]?[\\d]+$`)) {
    return 'Только цифра без + в начале'
  }
  if (!(value.length >= 10 && value.length <= 15)) {
    return 'от 10 до 15 символов'
  }

  return ''
}

export function validateEmailRegex(value: string): string {
  if (!value.match('^[a-zA-z]+[a-zA-Z\\d-_]*@[a-z]+\\.')) {
    return 'Неправильный email'
  }

  return ''
}

export function validateMatchString(value: string): string {
  if (value === 'equalOld') {
    return 'Новый пароль не должен быть таким же, как старый'
  }
  if (value === 'equalConfirm') {
    return 'Пароли не совпадают'
  }
  return ''
}
