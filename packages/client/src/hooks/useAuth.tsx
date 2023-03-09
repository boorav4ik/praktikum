import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { AuthState, changeProfile, signin, signout } from '../store/slices/auth'
import { User } from '../store/slices/auth/interfaces'

interface AuthActions {
  signin: (
    authData: { username: string; password: string },
    callback: () => void
  ) => void
  signout: () => void
  changeProfile: (data: User) => void
}

export function useAuth(): [AuthState, AuthActions] {
  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

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
