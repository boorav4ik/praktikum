import { TextField } from '../../components/TextFields'
import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from 'react-hook-form'
import { SignUp } from '../../store/slices/auth/interfaces'

interface SignUpFieldsProps {
  value: any
}

export function SignUpFields({ value }: SignUpFieldsProps) {
  const { control } = useForm<SignUp>({ mode: 'onBlur' })
  const { errors } = useFormState({ control })

  return (
    <Controller
      control={control}
      name="login"
      rules={value.validation}
      render={({ field }) => (
        <TextField
          {...field}
          name={value.name}
          id={value.name}
          label={value.label}
          variant="outlined"
          sx={{ width: '68%', margin: 1.2 }}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value || ''}
          error={!!errors.login?.message}
          helperText={errors?.login?.message}
          inputProps={{ style: { height: 10 } }}
          // InputLabelProps={{ style: { top: -5, marginTop: 0 } }}
          FormHelperTextProps={{ style: { height: 0, marginTop: -2 } }}
        />
      )}
    />
  )
}
