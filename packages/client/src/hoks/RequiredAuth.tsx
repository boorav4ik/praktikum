import { Navigate, useLocation } from 'react-router-dom'
import { useUserQuery } from 'servises/auth'
// import { useAuth } from 'hooks/useAuth'
import { Routes } from 'utils/routes'

export function RequiredAuth({ children }: { children: JSX.Element }) {
  // const [{ user, ...rest }] = useAuth()
  const user = useUserQuery()
  const { pathname } = useLocation()

  console.log({ user })

  if (!user.isSuccess)
    return (
      <Navigate to={`/${Routes.Login}`} replace state={{ from: pathname }} />
    )
  return children
}
