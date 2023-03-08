type stringOrNull = string | null

export interface User {
  id: number
  login: stringOrNull
  displayName: stringOrNull
  firstName: stringOrNull
  secondName: stringOrNull
  phone: stringOrNull
  email: stringOrNull
  avatar: stringOrNull
}
