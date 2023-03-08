import { Box, Container, Typography } from '@mui/material'
import { TextField } from '../components/TextFields'
import { Button } from '../components/Button'
import { useAppDispatch } from '../store/index'
import { signIn } from '../api/userApi'
import { useSelector } from 'react-redux'

export function LoginPage() {
  const dispatch = useAppDispatch()
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const login = data.get('username') as string,
      password = data.get('password') as string
    console.log('username = ', login)
    console.log('password = ', password)
    dispatch(signIn(login, password, ''))
  }

  const playerList = useSelector((state: any) => state)
  console.log('playerList = ', playerList)

  return (
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
            borderRadius: 16,
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
          <TextField
            id="username"
            name="username"
            label="Логин"
            variant="outlined"
          />
          <TextField
            id="password"
            name="password"
            label="Пароль"
            variant="outlined"
          />
          <Typography component="a">Нет аккаунта?!! Регистрация</Typography>
          <Button type="submit">Авторизация</Button>
        </Box>
      </Box>
    </Container>
  )
}
