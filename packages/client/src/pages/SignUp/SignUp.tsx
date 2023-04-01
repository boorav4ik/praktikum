import { Box, Container, Typography } from '@mui/material'
import { Button } from 'components/Button'
import { Navigate, useLocation, useNavigate, Link } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'
import { Routes } from 'utils/routes'
import { MapSignUpFields } from './SignUpData'
import {
  useForm,
  useFieldArray,
  Controller,
  useFormState,
} from 'react-hook-form'
import { SignUp } from 'storeAuth/interfaces'
import { TextField } from 'components/TextFields'

interface SignUpValues extends SignUp {
  list: {
    label: string
    value: string
    validation: object
    type: string
  }[]
}

export function SignUpPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [{ user }, { signup }] = useAuth()
  const { handleSubmit, control } = useForm<SignUpValues>({
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
    signup(
      {
        first_name: data.list[0].value,
        second_name: data.list[1].value,
        display_name: data.list[2].value,
        login: data.list[3].value,
        email: data.list[4].value,
        phone: data.list[5].value,
        password: data.list[6].value,
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
          <Typography component={Link} to={`/${Routes.Login}`}>
            Есть аккаунт?!! Авторизация
          </Typography>
          <Button type="submit">Регистрация</Button>
        </Box>
      </Box>
    </Container>
  )
}
