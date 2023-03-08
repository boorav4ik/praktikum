import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Routes } from './routes'

export function RequaredAuth({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const { pathname } = useLocation()

  if (!user)
    return <Navigate to={Routes.Login} replace state={{ from: pathname }} />
  return children
}
