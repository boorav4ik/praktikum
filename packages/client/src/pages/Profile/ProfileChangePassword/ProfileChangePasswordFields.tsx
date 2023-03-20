import { TextField } from '@mui/material'
import { FC } from 'react'
import { ProfileValidateFieldsProps } from '../interfaces'

const ProfileChangePasswordFields: FC<ProfileValidateFieldsProps> = ({
  label,
  name,
  value,
  handleInputChange,
  handleInputBlur,
  error,
}) => {
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
      error={error[name as keyof typeof error]}
      helperText={error[name as keyof typeof error]}
    />
  )
}

export default ProfileChangePasswordFields
