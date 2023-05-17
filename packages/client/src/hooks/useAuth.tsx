import { useSelector } from 'react-redux'
import {
  GetUser,
  ChangeProfile,
  ChangeAvatar,
  ChangePassword,
  ChangeTheme,
} from 'api/user'
import { signin, signout, signup } from 'api/auth'
import { RootState } from 'store'
import { useAppDispatch } from 'store/hooks'
import { AuthState, updateEditStatus, updateUserData } from 'store/slices/auth'
import { AuthActions } from './authActions'

export function useAuth(): [AuthState, AuthActions] {
  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useAppDispatch()

  return [
    auth,
    {
      signin(authData, callback) {
        dispatch(signin(authData))
        callback()
      },
      signup(signUpData, callback) {
        dispatch(signup(signUpData))
        callback()
      },
      signout() {
        dispatch(signout())
      },
      changeProfile(data) {
        dispatch(ChangeProfile(data))
      },
      changeAvatar(data) {
        dispatch(ChangeAvatar(data))
      },
      changePassword(data) {
        dispatch(ChangePassword(data))
      },
      changeThemeOnServer(data) {
        dispatch(ChangeTheme(data))
      },
      getUser() {
        dispatch(GetUser())
      },
      updateUserData(data) {
        dispatch(updateUserData(data))
      },
      updateEditStatus(data) {
        dispatch(updateEditStatus(data))
      },
    },
  ]
}
