import { useSelector } from 'react-redux'
import { getUser, signin, signout, signup } from '../api/userApi'
import { RootState } from '../store'
import { useAppDispatch } from '../store/hooks'
import { AuthState, changeProfile } from '../store/slices/auth'
import { User } from '../store/slices/auth/interfaces'

interface AuthActions {
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
