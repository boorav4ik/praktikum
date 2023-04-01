import { Box, Container, Typography } from '@mui/material'
import { Button } from 'components/Button'
import { Navigate, useLocation, useNavigate, Link } from 'react-router-dom'
import {
  useForm,
  useFieldArray,
  Controller,
  useFormState,
} from 'react-hook-form'
import { useAuth } from 'hooks/useAuth'
import { Routes } from 'utils/routes'
import { Login } from 'storeAuth/interfaces'
import { MapLoginFields } from './LoginData'
import { TextField } from 'components/TextFields'

interface LoginValues extends Login {
  list: {
    label: string
    value: string
    validation: object
    type: string
  }[]
}

export function LoginPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [{ user }, { signin }] = useAuth()
  const { handleSubmit, control } = useForm<LoginValues>({
    mode: 'onBlur',
    defaultValues: {
      list: MapLoginFields,
    },
  })
  const { errors } = useFormState({ control })
  const { fields } = useFieldArray({
    control,
    name: 'list',
  })

  function submitForm(data: LoginValues) {
    signin(
      {
        login: data.list[0].value,
        password: data.list[1].value,
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
          {fields.map(({ id, label, validation, type }, index) => {
            return (
              <Controller
                key={id}
                control={control}
                name={`list.${index}.value`}
                rules={validation}
                render={({ field }) => (
                  <TextField
                    {...field}
                    inputRef={field.ref}
                    label={label}
                    type={type}
                    variant="outlined"
                    sx={{ width: '68%' }}
                    margin="normal"
                    value={field.value || ''}
                    error={!!(errors?.list ?? [])[index]?.value?.message}
                    helperText={(errors?.list ?? [])[index]?.value?.message}
                    inputProps={{ style: { height: 5 } }}
                    InputLabelProps={{ style: { top: -7, marginTop: 0 } }}
                    FormHelperTextProps={{
                      style: { height: 0, marginTop: -1, zIndex: 999 },
                    }}
                  />
                )}
              />
            )
          })}
          <Typography component={Link} to={`/${Routes.SignUp}`}>
            Нет аккаунта?!! Регистрация
          </Typography>
          <Button type="submit">Авторизация</Button>
        </Box>
      </Box>
    </Container>
  )
}
