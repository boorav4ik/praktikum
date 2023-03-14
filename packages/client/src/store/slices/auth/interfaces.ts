import { Nullable } from '../../../utils/nullableType'

type nullableString = Nullable<string>

export interface User {
  id: number
  login: nullableString
  display_name: nullableString
  first_name: nullableString
  second_name: nullableString
  phone: nullableString
  email: nullableString
  avatar: nullableString
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
