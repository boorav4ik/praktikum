import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RootState } from '../../store'
import { Routes } from './routes'

export function RequaredAuth({ children }: { children: JSX.Element }) {
  const { user } = useSelector((state: RootState) => state.auth)
  const { pathname } = useLocation()

  if (!user)
    return <Navigate to={Routes.Login} replace state={{ from: pathname }} />
  return children
}
