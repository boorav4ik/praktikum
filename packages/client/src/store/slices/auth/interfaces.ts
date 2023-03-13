type stringOrNull = string | null

export interface User {
  id: number
  login: stringOrNull
  display_name: stringOrNull
  first_name: stringOrNull
  second_name: stringOrNull
  phone: stringOrNull
  email: stringOrNull
  avatar: stringOrNull
}

export interface Login {
  login: string
  password: string
}

export interface SignUp extends Login {
  first_name: string
  second_name: string
  display_name: string
  email: string
  phone: string
}
