import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { Button } from '../../components/Button'

export const ProfileChangePassword = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
      }}>
      <Button>Изменить пароль</Button>
    </Box>
  )
}
