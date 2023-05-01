import { useAuth } from 'hooks/useAuth'
import { Box, Typography } from '@mui/material'
import { LinkButton } from 'components/LinkButton'
import { Routes } from 'utils/routes'

export function LoginButtons() {
  const [{ user }, { signout }] = useAuth()

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        marginLeft: '30',
        width: '290px',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      {user && (
        <Typography sx={{ fontWeight: 500, fontSize: 20 }}>
          {user.display_name}
        </Typography>
      )}
      <LinkButton
        onClick={() => user && signout()}
        sx={{ width: 'fit-content' }}
        to={`/${Routes.Login}`}>
        {user ? 'Выйти' : 'Войти'}
      </LinkButton>

      {!user && (
        <LinkButton sx={{ width: 'fit-content' }} to={`/${Routes.SignUp}`}>
          Регистрация
        </LinkButton>
      )}
    </Box>
  )
}
