import { SignUp } from './../../store/slices/auth/interfaces'
import {
  FileProps,
  Login,
  User,
  ChangePassword,
} from '../../store/slices/auth/interfaces'

export interface AuthActions {
  signin: (authData: Login, callback: () => void) => void
  signup: (signUpData: SignUp, callback: () => void) => void
  signout: () => void
  changeProfile: (data: User) => void
  changeAvatar: (data: FileProps) => void
  changePassword: (data: ChangePassword) => void
  getUser: () => void
  updateUserData: (data: User) => void
  updateEditStatus: (data: string) => void
}
