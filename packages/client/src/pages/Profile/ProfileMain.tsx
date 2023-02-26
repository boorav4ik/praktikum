import { FC, useState, useEffect } from 'react'
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
  const [newUserData, setNewUserData] = useState<object>(user)
  const saveUser = (userData: object) => {
    setNewUserData({ ...newUserData, ...userData })
  }

  useEffect(() => {
    if (editStatus === 'save' || editStatus === 'cancel') {
      saveUserData(newUserData, editStatus)
    }
  }, [editStatus])

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
        {['firstName', 'secondName', 'phone'].map(field => (
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
        {['email', 'login', 'password'].map(field => (
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
