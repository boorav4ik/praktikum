import { FC, ChangeEvent } from 'react'
import { Box, Stack } from '@mui/material'
import { MapProfileInputFields } from './ProfileFieldsData'
import { ProfileFields } from './ProfileFields'
import { useInputsValidate } from '../../hooks/useInputsValidate'
import { validate } from '../../utils/formInputValidators/validate'
import { useAuth } from '../../hooks/useAuth'
import { deepEqual } from '../../utils/deepEqual'

export function ProfileMain() {
  const [{ user, userData, editStatus }, { updateUserData }] = useAuth()
  const { errors = {}, handleInputBlur } = useInputsValidate(true, validate)

  // console.log('ProfileMain editStatus = ', editStatus)
  // console.log('ProfileMain userData = ', userData)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        p: 3,
        width: '95%',
      }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        sx={{ flexWrap: 'wrap' }}>
        {MapProfileInputFields.map(({ label, name }) => (
          <ProfileFields
            key={name}
            disabled={editStatus === 'info'}
            label={label}
            name={name}
            value={userData![name as keyof typeof userData]}
            handleInputChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateUserData({
                ...userData,
                ...{ [name]: event.target.value as string },
              })
            }
            handleInputBlur={handleInputBlur}
            error={deepEqual(user, userData) ? false : errors}
          />
        ))}
      </Stack>
    </Box>
  )
}
