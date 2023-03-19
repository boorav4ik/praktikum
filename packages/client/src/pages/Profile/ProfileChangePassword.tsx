import { Box, TextField, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Button } from '../../components/Button'
import { useInputsValidate } from '../../hooks/useInputsValidate'
import { validate } from '../../utils/formInputValidators/validate'
import { isEmptyObjField } from '../../utils/isEmptyObject'
import { EnumPasswordFields } from './enumInputFields'
import { MapPasswordInputFields } from './ProfileInputsFields'

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '3px solid #1E515D',
  borderRadius: 11,
  boxShadow: 24,
  p: 4,
}
interface ProfileChangePasswordProps {
  handleModal: (state: boolean) => void
  handleChangePassword: (data: {
    oldPassword: string
    newPassword: string
  }) => void
}

export const ProfileChangePassword: FC<ProfileChangePasswordProps> =
  React.forwardRef(({ handleModal, handleChangePassword }) => {
    const {
      values,
      handleInputChange,
      errors,
      handleInputBlur,
      checkEmptyInputs,
    } = useInputsValidate(true, validate)

    const changePassword = () => {
      const checkEmpty = [
        { field: EnumPasswordFields.oldPassword, value: values.oldPassword },
        { field: EnumPasswordFields.newPassword, value: values.newPassword },
        {
          field: EnumPasswordFields.confirmPassword,
          value: values.confirmPassword,
        },
      ].reduce((acc, { field, value }) => {
        return !value ? { ...acc, ...{ [field]: value } } : acc
      }, {} as any)

      if (Object.keys(checkEmpty).length > 0) {
        checkEmptyInputs(checkEmpty)
        return
      }

      if (isEmptyObjField(errors)) {
        handleChangePassword({
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        })
      }
    }

    return (
      <Box sx={style}>
        <Typography>Смена пароля</Typography>
        {MapPasswordInputFields.map(({ label, name }) => (
          <TextField
            sx={{ width: '90%', m: 2, mt: 4, height: 40 }}
            label={label}
            name={name}
            type="password"
            variant="filled"
            value={values[name as keyof typeof values]}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            {...(errors[name as keyof typeof errors] && {
              error: true,
              helperText: errors[name as keyof typeof errors],
            })}
          />
        ))}
        <Button sx={{ width: '70%', m: 5 }} onClick={changePassword}>
          Изменить
        </Button>
        <Button sx={{ width: '70%' }} onClick={() => handleModal(false)}>
          Отмена
        </Button>
      </Box>
    )
  })
