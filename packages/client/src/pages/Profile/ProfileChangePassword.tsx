import { Box, TextField, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import { Button } from '../../components/Button'

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
    const [oldPassword, setOldPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const changePassword = () => {
      if (!oldPassword || !newPassword || !confirmPassword) {
        setError('Не все поля введены')
        return
      }

      if (newPassword !== confirmPassword) {
        setError('Пароли не совпадают')
        return
      }
      if (newPassword === oldPassword) {
        setError('Старый и новый пароль одинаковые')
        return
      }
      handleChangePassword({ oldPassword, newPassword })
      handleModal(false)
    }
    return (
      <Box sx={style}>
        <Typography>Смена пароля</Typography>
        <Typography sx={{ color: 'red', m: 1, mt: 3, height: 20 }}>
          {error}
        </Typography>
        <TextField
          sx={{ width: '90%', m: 2, mt: 4 }}
          label="Old Password"
          variant="filled"
          value={oldPassword}
          onChange={e => (setOldPassword(e.target.value), setError(''))}
        />
        <TextField
          sx={{ width: '90%', m: 2 }}
          label="New Password"
          variant="filled"
          value={newPassword}
          onChange={e => (setNewPassword(e.target.value), setError(''))}
        />
        <TextField
          sx={{ width: '90%', m: 2 }}
          label="Confirm Password"
          variant="filled"
          value={confirmPassword}
          onChange={e => (setConfirmPassword(e.target.value), setError(''))}
        />
        <Button sx={{ width: '70%', m: 5 }} onClick={changePassword}>
          Изменить
        </Button>
        <Button sx={{ width: '70%' }} onClick={() => handleModal(false)}>
          Отмена
        </Button>
      </Box>
    )
  })
