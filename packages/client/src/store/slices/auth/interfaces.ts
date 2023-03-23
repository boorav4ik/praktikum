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
  password: stringOrNull
}

export interface SignUp {
  login: stringOrNull
  display_name: stringOrNull
  first_name: stringOrNull
  second_name: stringOrNull
  phone: stringOrNull
  email: stringOrNull
  password: stringOrNull
}

export interface Login {
  login: string
  password: string
}

export interface ChangePasswordProps {
  oldPassword: string
  newPassword: string
}

export interface FileProps {
  data: string | ArrayBuffer | null
  info: File
}
