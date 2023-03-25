import { useAuth } from 'hooks/useAuth'
import { Box } from '@mui/material'
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
      }}>
      <LinkButton
        onClick={() => user && signout()}
        sx={{ width: 'fit-content' }}
        to={`/${Routes.Login}`}>
        {user ? 'Выйти' : 'Войти'}
      </LinkButton>

      {!user && (
        <LinkButton sx={{ width: 'fit-content' }} to={`/${Routes.Login}`}>
          Регистрация
        </LinkButton>
      )}
    </Box>
  )
}
