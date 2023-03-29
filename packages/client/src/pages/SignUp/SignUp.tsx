import { useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { TextField } from '../../components/TextFields'
import { Button } from '../../components/Button'
import { Navigate, useLocation, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Routes } from '../../utils/routes'
import { MapSignUpFields, MapSignUpFieldsTest } from './SignUpData'
import {
  useForm,
  useFieldArray,
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
  const { handleSubmit, control, register } = useForm({
    mode: 'onBlur',
    defaultValues: {
      list: MapSignUpFieldsTest,
    },
  })
  const { errors } = useFormState({ control })

  const { fields } = useFieldArray({
    control,
    name: 'list',
  })

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
          {/* {fields.map(({ id }, index) => {
            return (
              <Controller
                control={control}
                // name="login"
                name={`first_name[${index}].first_name`}
                rules={`first_name[${index}].first_name`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    // name={value.name}
                    // id={value.name}
                    // label={value.label}
                    // variant="outlined"
                    // sx={{ width: '68%', margin: 1.2 }}
                    // onChange={field.onChange}
                    // onBlur={field.onBlur}
                    // value={field.value || ''}
                    // error={!!errors.login?.message}
                    // helperText={errors?.login?.message}
                    {...field}
                    error={!!errors?.first_name}
                    helperText={
                      errors.first_name && `${errors.first_name.message}`
                    }
                    margin="normal"
                    required
                    fullWidth
                    id="first_name"
                    label={`first_name - ${index + 1}`}
                    inputProps={{ style: { height: 10 } }}
                    // InputLabelProps={{ style: { top: -5, marginTop: 0 } }}
                    FormHelperTextProps={{
                      style: { height: 0, marginTop: -2 },
                    }}
                  />
                )}
              />
            )
          })} */}
          {fields.map(({ id, name, label, validation }, index) => {
            console.log('index = ', { id, name, label, validation })
            return (
              <Controller
                key={id}
                control={control}
                name={`list.${index}.name`}
                rules={validation}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="list"
                    label={label}
                    variant="outlined"
                    margin="normal"
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value || ''}
                    error={!!errors[name]?.message}
                    helperText={errors[name]?.message}
                    inputProps={{ style: { height: 10 } }}
                    // InputLabelProps={{ style: { top: -5, marginTop: 0 } }}
                    FormHelperTextProps={{
                      style: { height: 0, marginTop: -2 },
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
