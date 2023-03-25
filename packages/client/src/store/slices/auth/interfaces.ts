import { Nullable } from '../../../utils/nullableType'

type NullableString = Nullable<string>

export interface User {
  id: number
  login: NullableString
  display_name: NullableString
  first_name: NullableString
  second_name: NullableString
  phone: NullableString
  email: NullableString
  avatar: NullableString
  password: NullableString
}

export interface SignUp {
  login: NullableString
  display_name: NullableString
  first_name: NullableString
  second_name: NullableString
  phone: NullableString
  email: NullableString
  password: NullableString
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
