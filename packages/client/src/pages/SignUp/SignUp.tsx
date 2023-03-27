import { Box, Container, Typography } from '@mui/material'
import { TextField } from '../../components/TextFields'
import { Button } from '../../components/Button'
import { Navigate, useLocation, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Routes } from '../../utils/routes'
import { MapSignUpFields } from './SignUpData'
import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from 'react-hook-form'
import { SignUp } from '../../store/slices/auth/interfaces'
import { SignUpFields } from './SignUpFields'

export function SignUpPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [{ user }, { signup }] = useAuth()
  const { handleSubmit, control } = useForm<SignUp>({ mode: 'onBlur' })

  function submitForm(data: SignUp) {
    console.log('data = ', data)
    // signup(
    //   {
    //     first_name: data.first_name,
    //     second_name: data.second_name,
    //     display_name: data.display_name,
    //     login: data.login,
    //     email: data.email,
    //     password: data.password,
    //     phone: data.phone,
    //   },
    //   () => navigate(location.state ?? '/')
    // )
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
          onSubmit={handleSubmit(submitForm)}
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
          <Typography sx={{ fontWeight: 700, fontSize: 28 }} color="green.64">
            Регистрация
          </Typography>
          {MapSignUpFields.map(value => (
            <SignUpFields key={value.name} value={value} />
          ))}
          <Typography component={Link} to={`/${Routes.Login}`}>
            Есть аккаунт?!! Авторизация
          </Typography>
          <Button type="submit">Регистрация</Button>
        </Box>
      </Box>
    </Container>
  )
}
