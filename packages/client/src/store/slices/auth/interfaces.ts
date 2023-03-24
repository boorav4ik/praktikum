import { Nullable } from '../../../utils/nullableType'

type stringOrNull = string | null

export interface User {
  id: number
  login: Nullable<string>
  display_name: Nullable<string>
  first_name: Nullable<string>
  second_name: Nullable<string>
  phone: Nullable<string>
  email: Nullable<string>
  avatar: Nullable<string>
  password: Nullable<string>
}

export interface SignUp {
  login: Nullable<string>
  display_name: Nullable<string>
  first_name: Nullable<string>
  second_name: Nullable<string>
  phone: Nullable<string>
  email: Nullable<string>
  password: Nullable<string>
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
