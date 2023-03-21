import { TextField } from '@mui/material'
import { ProfileValidateFieldsProps } from './interfaces'

export function ProfileFields({
  label,
  name,
  disabled,
  value,
  handleInputChange,
  handleInputBlur,
  error,
}: ProfileValidateFieldsProps) {
  return (
    <TextField
      sx={{ width: '48%', height: 80 }}
      label={label}
      name={name}
      disabled={disabled}
      variant="filled"
      value={value || ''}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      error={error && error.length ? true : false}
      helperText={error}
    />
  )
}
