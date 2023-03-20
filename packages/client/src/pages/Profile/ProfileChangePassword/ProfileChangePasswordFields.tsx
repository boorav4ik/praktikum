import { TextField } from '@mui/material'
import { FC } from 'react'
import { ProfileChangePasswordFieldsProps } from '../interfaces'

const ProfileChangePasswordFields: FC<ProfileChangePasswordFieldsProps> = ({
  label,
  name,
  values,
  handleInputChange,
  handleInputBlur,
  errors,
}) => {
  return (
    <TextField
      sx={{ width: '90%', m: 2, mt: 4, height: 40 }}
      label={label}
      name={name}
      type="password"
      variant="filled"
      value={values[name as keyof typeof values]}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      error={errors[name as keyof typeof errors]}
      helperText={errors[name as keyof typeof errors]}
    />
  )
}

export default ProfileChangePasswordFields
