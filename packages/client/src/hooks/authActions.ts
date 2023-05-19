import {
  SignUp,
  FileProps,
  Login,
  User,
  ChangePasswordProps,
  ChangeThemeProps,
} from 'storeAuth/interfaces'
export interface AuthActions {
  signin: (authData: Login, callback: () => void) => void
  signup: (signUpData: SignUp, callback: () => void) => void
  signout: () => void
  changeProfile: (data: User) => void
  changeAvatar: (data: FileProps) => void
  changePassword: (data: ChangePasswordProps) => void
  changeThemeOnServer: (data: ChangeThemeProps) => void
  getUser: () => void
  updateUserData: (data: User) => void
  updateEditStatus: (data: string) => void
}
