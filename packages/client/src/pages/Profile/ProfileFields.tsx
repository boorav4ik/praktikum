import { TextField } from '@mui/material'
import { ChangeEvent, FC } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useInputsValidate } from '../../hooks/useInputsValidate'
import { validate } from '../../utils/formInputValidators/validate'
import { ProfileFieldsProps } from './interfaces'

const ProfileFields: FC<ProfileFieldsProps> = ({
  label,
  name,
  value,
  disabled,
}) => {
  const [{ user, userData }, { updateUserData }] = useAuth()
  const {
    values,
    handleInputChange,
    errors,
    handleInputBlur,
    checkEmptyInputs,
  } = useInputsValidate(true, validate)

  const updateData = (event: ChangeEvent<HTMLInputElement>) => {
    const data = { [name]: event.target.value as string }
    updateUserData({ ...user, ...data })
    handleInputChange(event)
  }

  console.log('value = ', value)

  return (
    <TextField
      sx={{ width: '48%', height: 80 }}
      label={label}
      name={name}
      disabled={disabled}
      variant="filled"
      defaultValue={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) => updateData(event)}
      onBlur={handleInputBlur}
      {...(errors[name as keyof typeof errors] && {
        error: true,
        helperText: errors[name as keyof typeof errors],
      })}
    />
  )
}

export default ProfileFields
