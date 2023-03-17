import { useSelector } from 'react-redux'
import {
  getUser,
  changeProfile,
  changeAvatar,
  changePassword,
} from '../api/user'
import { signin, signout, signup } from '../api/auth'
import { RootState } from '../store'
import { useAppDispatch } from '../store/hooks'
import { AuthState } from '../store/slices/auth'
import { AuthActions } from './interfaces/authActions'

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
        dispatch(changeProfile(data))
      },
      changeAvatar(data) {
        dispatch(changeAvatar(data))
      },
      changePassword(data) {
        dispatch(changePassword(data))
      },
      getUser() {
        dispatch(getUser())
      },
    },
  ]
}
