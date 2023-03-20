import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useAuth } from '../../../hooks/useAuth'
import { Routes } from '../../../utils/routes'

export function AuthButton({ isExpanded = true }: { isExpanded?: boolean }) {
  const [{ user }, { signout }] = useAuth()
  const navigate = useNavigate()

  return (
    <Button
      onClick={() => (user ? signout() : navigate(Routes.Login))}
      variant="outlined"
      sx={{
        width: '95%',
        fontWeight: 'bold',
        fontSize: '0.975rem',
        display: isExpanded ? 'block' : 'flex',
        color: '#1E515D',
        mt: 0,
      }}>
      {user ? 'Выйти' : 'Войти'}
    </Button>
  )
}
