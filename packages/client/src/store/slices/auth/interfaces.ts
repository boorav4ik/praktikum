import { Nullable } from '../../../utils/nullableType'

export interface User {
  id: number
  login: Nullable<string>
  display_name: Nullable<string>
  first_name: Nullable<string>
  second_name: Nullable<string>
  phone: Nullable<string>
  email: Nullable<string>
  avatar: Nullable<string>
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
