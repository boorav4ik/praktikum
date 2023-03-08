import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useAuth } from '../../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { signout } from '../../store/slices/auth'
import { Routes } from '../../utils/routing/routes'

export function AuthButton({ isExpanded }: { isExpanded: boolean }) {
  const { user } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <Button
      onClick={() => (user ? dispatch(signout()) : navigate(Routes.Login))}
      variant="outlined"
      sx={{
        width: '95%',
        fontWeight: 'bold',
        fontSize: '0.975rem',
        display: isExpanded ? 'block' : 'none',
        color: '#1E515D',
        mt: 2,
      }}>
      {user ? 'Выйти' : 'Войти'}
    </Button>
  )
}
