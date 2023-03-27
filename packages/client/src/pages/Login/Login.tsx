import { Box, Container, Typography } from '@mui/material'
import { TextField } from '../../components/TextFields'
import { Button } from '../../components/Button'
import { Navigate, useLocation, useNavigate, Link } from 'react-router-dom'
import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import { Routes } from '../../utils/routes'
import { Login } from '../../store/slices/auth/interfaces'
import {
  loginValidation,
  passwordValidation,
} from '../../utils/formInputValidators/validatorRules'

export function LoginPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [{ user }, { signin }] = useAuth()
  const { handleSubmit, control } = useForm<Login>({ mode: 'onBlur' })
  const { errors } = useFormState({ control })

  function submitForm(data: Login) {
    signin(
      {
        login: data.login,
        password: data.password,
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
          onSubmit={handleSubmit(submitForm)}
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
          <Controller
            control={control}
            name="login"
            rules={loginValidation}
            render={({ field }) => (
              <TextField
                name="login"
                id="login"
                label="Логин"
                variant="outlined"
                sx={{ width: '68%' }}
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value || ''}
                error={!!errors.login?.message}
                helperText={errors?.login?.message}
                InputLabelProps={{ style: { top: -5 } }}
                FormHelperTextProps={{ style: { height: 0 } }}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={passwordValidation}
            render={({ field }) => (
              <TextField
                name="password"
                id="password"
                label="Пароль"
                variant="outlined"
                sx={{ width: '68%', marginTop: 2 }}
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value || ''}
                error={!!errors.password?.message}
                helperText={errors?.password?.message}
                InputLabelProps={{ style: { top: -5 } }}
                FormHelperTextProps={{ style: { height: 0 } }}
              />
            )}
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
