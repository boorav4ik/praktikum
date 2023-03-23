import { TextField } from '@mui/material'
import { ProfileValidateFieldsProps } from './interfaces'

export function ProfileFields({
  label,
  name,
  disabled,
  value,
  handleInputChange,
  handleInputBlur,
  error = false,
  errorText,
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
      error={error}
      helperText={errorText}
    />
  )
}
