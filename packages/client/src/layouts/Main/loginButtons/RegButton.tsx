import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { Routes } from '../../../utils/routes'

export function RegButton() {
  const navigate = useNavigate()

  return (
           <Button
                  onClick={() => (navigate(Routes.Login))}
                  variant="outlined"
                  sx={{
                      width: '95%',
                      minWidth: '200px',
                      fontWeight: 'bold',
                      fontSize: '0.975rem',
                      display: 'flex',
                      color: '#1E515D',
                      mt: 0,
                  }}>
                 Регистрация
              </Button>
  )
}
