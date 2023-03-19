import { FC, useRef, useEffect, ChangeEvent } from 'react'
import { Box, Stack, TextField } from '@mui/material'
import { ProfileFields } from './ProfileFields'
import { MapProfileInputFields } from './ProfileInputsFields'
import { useInputsValidate } from '../../hooks/useInputsValidate'
import { validate } from '../../utils/formInputValidators/validate'

interface ProfileMainProps {
  user: object
  editStatus: string
  saveUserData: (newUserData: object | undefined, status: string) => void
}

export const ProfileMain: FC<ProfileMainProps> = ({
  user,
  editStatus,
  saveUserData,
}) => {
  const newUserData = useRef<object>(user)
  const {
    values,
    handleInputChange,
    errors,
    handleInputBlur,
    checkEmptyInputs,
  } = useInputsValidate(true, validate)

  const saveUser = (userData: object) => {
    newUserData.current = { ...newUserData.current, ...userData }
  }

  useEffect(() => {
    if (editStatus === 'save') {
      saveUserData(newUserData.current, editStatus)
    } else if (editStatus === 'cancel') {
      saveUserData(user, editStatus)
    }
  }, [editStatus])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        p: 3,
        width: '80%',
      }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        sx={{ flexWrap: 'wrap' }}>
        {MapProfileInputFields.map(({ label, name }) => (
          <TextField
            key={name}
            defaultValue={user[name as keyof typeof user]}
            sx={{ width: '45%', height: 60 }}
            label={label}
            name={name}
            disabled={editStatus === 'info'}
            variant="filled"
            margin="normal"
            onBlur={handleInputBlur}
            {...(errors[name as keyof typeof errors] && {
              error: true,
              helperText: errors[name as keyof typeof errors],
            })}
            onChange={(event: ChangeEvent<HTMLInputElement>) => (
              saveUser({ [label]: event.target.value }), handleInputChange
            )}
          />
        ))}
      </Stack>
    </Box>
  )
}
