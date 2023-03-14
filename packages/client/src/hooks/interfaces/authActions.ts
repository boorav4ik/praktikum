import { User } from '../../store/slices/auth/interfaces'

export interface AuthActions {
  signin: (
    authData: {
      login: string
      password: string
    },
    callback: () => void
  ) => void
  signup: (
    signUpData: {
      first_name: string
      second_name: string
      display_name: string
      login: string
      email: string
      password: string
      phone: string
    },
    callback: () => void
  ) => void
  signout: () => void
  changeProfile: (data: User) => void
  getUser: () => void
}
