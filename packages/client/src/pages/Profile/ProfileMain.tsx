import { FC, useRef, useEffect, ChangeEvent } from 'react'
import { Box, Stack, TextField } from '@mui/material'
import { MapProfileInputFields } from './ProfileFieldsData'
import { useInputsValidate } from '../../hooks/useInputsValidate'
import { validate } from '../../utils/formInputValidators/validate'
import ProfileFields from './ProfileFields'

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
  // const newUserData = useRef<object>(user)

  const saveUser = (userData: object) => {
    newUserData.current = { ...newUserData.current, ...userData }
  }

  useEffect(() => {
    if (editStatus === 'save') {
      // saveUserData(newUserData.current, editStatus)
    } else if (editStatus === 'cancel') {
      console.log('cancel')
      // newUserData.current = user
      // console.log('newUserData.current = ', newUserData.current)
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
            value={user[name as keyof typeof user]}
            // handleInputChange={handleInputChange}
            // handleInputBlur={handleInputBlur}
            // errors={errors}
            // onChange={(event: ChangeEvent<HTMLInputElement>) => (
            //   saveUser({ [name]: event.target.value }), handleInputChange
            // )}
          />
        ))}
      </Stack>
    </Box>
  )
}
