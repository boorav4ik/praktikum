import { TextField } from '@mui/material'
import { ProfileValidateFieldsProps } from '../interfaces'

export function ProfileChangePasswordFields({
  label,
  name,
  value,
  handleInputChange,
  handleInputBlur,
  error,
}: ProfileValidateFieldsProps) {
  return (
    <TextField
      sx={{ width: '90%', m: 2, mt: 4, height: 40 }}
      label={label}
      name={name}
      type="password"
      variant="filled"
      value={value[name as keyof typeof value]}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      error={error && error.length ? true : false}
      helperText={error}
    />
  )
}
