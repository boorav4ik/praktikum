import { Login, SignUp, User } from '../../store/slices/auth/interfaces'

export interface AuthActions {
  signin: (authData: Login, callback: () => void) => void
  signup: (signUpData: SignUp, callback: () => void) => void
  signout: () => void
  changeProfile: (data: User) => void
  getUser: () => void
}
