import { Box, Container, Typography } from '@mui/material'
import { TextField } from '../components/TextFields'
import { Button } from '../components/Button'
import { Navigate, useLocation, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Routes } from '../utils/routes'

export function SignUpPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [{ user }, { signup }] = useAuth()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    signup(
      {
        first_name: data.get('first_name') as string,
        second_name: data.get('second_name') as string,
        display_name: data.get('display_name') as string,
        login: data.get('login') as string,
        email: data.get('email') as string,
        password: data.get('password') as string,
        phone: data.get('phone') as string,
      },
      () => navigate(location.state.from ?? '/')
    )
  }

  return user ? (
    <Navigate to={Routes.Index} replace />
  ) : (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          mt: 6,
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
            borderRadius: 16,
            border: '3px solid #1E515D',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 540,
            height: 600,
            justifyContent: 'space-around',
          }}>
          <Typography sx={{ fontWeight: 700, fontSize: 32 }} color="green.64">
            Регистрация
          </Typography>
          <TextField
            id="first_name"
            name="first_name"
            label="Имя"
            variant="outlined"
          />
          <TextField
            id="second_name"
            name="second_name"
            label="Фамилия"
            variant="outlined"
          />
          <TextField
            id="display_name"
            name="display_name"
            label="Ник"
            variant="outlined"
          />
          <TextField id="login" name="login" label="Логин" variant="outlined" />
          <TextField id="email" name="email" label="Почта" variant="outlined" />
          <TextField
            id="password"
            name="password"
            label="Пароль"
            variant="outlined"
          />
          <TextField
            id="phone"
            name="phone"
            label="Телефон"
            variant="outlined"
          />
          <Typography component={Link} to={`/${Routes.Login}`}>
            Есть аккаунт?!! Авторизация
          </Typography>
          <Button type="submit">Регистрация</Button>
        </Box>
      </Box>
    </Container>
  )
}
