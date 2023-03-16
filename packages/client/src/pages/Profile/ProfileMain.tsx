import { FC, useRef, useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import { ProfileFields } from './ProfileFields'

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

  console.log('user = ', user)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-evenly',
        p: 3,
        width: '75%',
      }}>
      <Stack spacing={2}>
        {['first_name', 'second_name', 'display_name'].map(field => (
          <ProfileFields
            key={field}
            value={user[field as keyof typeof user]}
            label={field}
            editStatus={editStatus}
            changeDataUser={(newUserData: object) => saveUser(newUserData)}
          />
        ))}
      </Stack>
      <Stack spacing={2}>
        {['login', 'email', 'phone'].map(field => (
          <ProfileFields
            key={field}
            value={user[field as keyof typeof user]}
            label={field}
            editStatus={editStatus}
            changeDataUser={(newUserData: object) => saveUser(newUserData)}
          />
        ))}
      </Stack>
    </Box>
  )
}
