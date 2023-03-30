import { Box, Container, Typography } from '@mui/material'
import { TextField } from '../../components/TextFields'
import { Button } from '../../components/Button'
import { Navigate, useLocation, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Routes } from '../../utils/routes'
import { MapSignUpFields } from './SignUpData'
import {
  useForm,
  useFieldArray,
  Controller,
  useFormState,
} from 'react-hook-form'
import { SignUp } from '../../store/slices/auth/interfaces'

interface SignUpValues extends SignUp {
  list: {
    label: string
    value: string
    validation: {}
  }[]
}

export function SignUpPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [{ user }, { signup }] = useAuth()

  const { handleSubmit, control, register } = useForm<SignUpValues>({
    mode: 'onBlur',
    defaultValues: {
      list: MapSignUpFields,
    },
  })
  const { errors } = useFormState({ control })

  const { fields } = useFieldArray({
    control,
    name: 'list',
  })

  function submitForm(data: SignUpValues) {
    console.log('data = ', data)
    signup(
      {
        first_name: data.first_name,
        second_name: data.second_name,
        display_name: data.display_name,
        login: data.login,
        email: data.email,
        password: data.password,
        phone: data.phone,
      },
      () => navigate(location.state ?? '/')
    )
  }

  console.log('error = ', errors)

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
          {fields.map(({ id, label, validation }, index) => {
            return (
              <Controller
                key={id}
                control={control}
                {...register(`list.${index}.value`)}
                rules={validation}
                render={({ field }) => {
                  console.log('field = ', field.name)
                  console.log('errors = ', errors)
                  return (
                    <TextField
                      {...field}
                      id="list"
                      label={label}
                      variant="outlined"
                      sx={{ width: '68%' }}
                      margin="normal"
                      error={!!errors.list}
                      helperText={
                        errors.list ? errors?.list[index]?.value?.message : ''
                      }
                      inputProps={{ style: { height: 10 } }}
                      InputLabelProps={{ style: { top: -5, marginTop: 0 } }}
                      FormHelperTextProps={{
                        style: { height: 0, marginTop: -2 },
                      }}
                    />
                  )
                }}
              />
            )
          })}
          <Typography component={Link} to={`/${Routes.Login}`}>
            Есть аккаунт?!! Авторизация
          </Typography>
          <Button type="submit">Регистрация</Button>
        </Box>
      </Box>
    </Container>
  )
}
