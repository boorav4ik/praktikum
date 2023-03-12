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
