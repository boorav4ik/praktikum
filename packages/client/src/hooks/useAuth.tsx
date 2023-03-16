import { useSelector } from 'react-redux'
import { getUser } from '../api/user'
import { signin, signout, signup } from '../api/auth'
import { RootState } from '../store'
import { useAppDispatch } from '../store/hooks'
import { AuthState, changeProfile } from '../store/slices/auth'
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
      getUser() {
        dispatch(getUser())
      },
    },
  ]
}
