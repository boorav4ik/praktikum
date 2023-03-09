import { useSelector } from 'react-redux'
import { signin } from '../api/userApi'
import { RootState } from '../store'
import { useAppDispatch } from '../store/hooks'
import { AuthState, changeProfile, signout } from '../store/slices/auth'
import { User } from '../store/slices/auth/interfaces'

interface AuthActions {
  signin: (
    authData: { login: string; password: string },
    callback: () => void
  ) => void
  signout: () => void
  changeProfile: (data: User) => void
}

export function useAuth(): [AuthState, AuthActions] {
  const auth = useSelector((state: RootState) => state.auth)
  console.log('auth = ', auth)
  const dispatch = useAppDispatch()

  return [
    auth,
    {
      signin(authData, callback) {
        dispatch(signin(authData))
        callback()
      },
      signout() {
        dispatch(signout())
      },
      changeProfile(data) {
        dispatch(changeProfile(data))
      },
    },
  ]
}
