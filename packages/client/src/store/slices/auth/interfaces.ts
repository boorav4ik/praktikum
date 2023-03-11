import { Nullable } from '../../../utils/nullableType'

type nullableString = Nullable<string>

export interface User {
  id: number
  login: nullableString
  displayName: nullableString
  firstName: nullableString
  secondName: nullableString
  phone: nullableString
  email: nullableString
  avatar: nullableString
}
