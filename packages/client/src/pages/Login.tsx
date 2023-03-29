import { Box, Container, Typography } from '@mui/material'
import { TextField } from 'components/TextFields'
import { Button } from 'components/Button'
import { Navigate, useLocation, useNavigate, Link } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'
import { Routes } from 'utils/routes'
import { FormEvent } from 'react'

export function LoginPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [{ user }, { signin }] = useAuth()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    signin(
      {
        login: data.get('login') as string,
        password: data.get('password') as string,
      },
      () => navigate(location.state ?? '/')
    )
  }

  return user ? (
    <Navigate to={Routes.Index} replace />
  ) : (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          my: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography sx={{ fontWeight: 700, fontSize: 96 }}>2048</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          bgcolor="background.paper"
          sx={{
            borderRadius: 2,
            border: '3px solid #1E515D',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 540,
            height: 382,
            justifyContent: 'space-around',
          }}>
          <Typography sx={{ fontWeight: 700, fontSize: 32 }} color="green.64">
            Вход
          </Typography>
          <TextField id="login" name="login" label="Логин" variant="outlined" />
          <TextField
            id="password"
            name="password"
            label="Пароль"
            variant="outlined"
          />
          <Typography component={Link} to={`/${Routes.SignUp}`}>
            Нет аккаунта?!! Регистрация
          </Typography>
          <Button type="submit">Авторизация</Button>
        </Box>
      </Box>
    </Container>
  )
}
