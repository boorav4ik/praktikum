import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { Button } from '../../../components/Button'
import { useInputsValidate } from '../../../hooks/useInputsValidate'
import { MapPasswordInputFields } from '../ProfileFieldsData'
import { ProfileChangePasswordFields } from './ProfileChangePasswordFields'
import { validate } from '../../../utils/formInputValidators/validate'
import { isEmptyObjField } from '../../../utils/isEmptyObject'
import { EnumPasswordFields } from './enumInputFields'

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

export const ProfileChangePassword: FC<ProfileChangePasswordProps> = ({
  handleModal,
  handleChangePassword,
}) => {
  const {
    values,
    handleInputChange,
    errors,
    handleInputBlur,
    checkEmptyInputs,
  } = useInputsValidate(true, validate)

  function changePassword() {
    const checkEmpty = [
      { field: EnumPasswordFields.oldPassword, value: values.oldPassword },
      { field: EnumPasswordFields.newPassword, value: values.newPassword },
      {
        field: EnumPasswordFields.confirmPassword,
        value: values.confirmPassword,
      },
    ].reduce(
      (acc, { field, value }) =>
        !value ? { ...acc, ...{ [field]: value } } : acc,
      {} as any
    )

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
        <ProfileChangePasswordFields
          key={name}
          label={label}
          name={name}
          value={values}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
          error={errors[name] !== ''}
          errorText={errors[name]}
          disabled={false}
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
}
