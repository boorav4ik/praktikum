import { FileProps, Login, User } from '../../store/slices/auth/interfaces'

export interface AuthActions {
  signin: (authData: Login, callback: () => void) => void
  signup: (signUpData: User, callback: () => void) => void
  signout: () => void
  changeProfile: (data: User) => void
  changeAvatar: (data: FileProps) => void
  getUser: () => void
}
