import { Box, Container } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { deepEqual } from '../../utils/deepEqual'
import { ProfileFooter } from './ProfileFooter'
import { ProfileHeader } from './ProfileHeader'
import { ProfileMain } from './ProfileMain'
import { useAuth } from '../../hooks/useAuth'

interface FileProps {
  data: string | ArrayBuffer | null
  info: File
}

export function ProfilePage() {
  const [{ user }, { changeProfile }] = useAuth()
  const [editStatus, setEditStatus] = useState<string>('info')
  const [file, setFile] = useState<FileProps>()

  const saveUserData = (newUserData: object | undefined, status: string) => {
    if (status === 'cancel') {
      setEditStatus('info')
      console.log('Отмена изменений. Ждем redux')
      return
    }

    const newData = { ...user!, ...newUserData }
    const checkUser = deepEqual(user, newData)
    if (!checkUser || file) {
      changeProfile(newData)
    }
    setEditStatus('info')
  }

  const editFields = (status: string) => {
    setEditStatus(status)
  }

  const ChooseFile = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      if (!event.target.files) return
      setFile({ info: event.target?.files[0], data: reader.result })
      if (editStatus === 'info') {
        editFields('edit')
      }
    }
    event.target.files instanceof FileList
      ? reader.readAsDataURL(event.target.files[0])
      : console.log('handle exception')
  }

  return (
    <Container component="main" maxWidth="md">
      <Box
        bgcolor="background.paper"
        sx={{
          display: 'flex',
          borderRadius: 2,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          my: 10,
          border: '3px solid #1E515D',
          p: 3,
        }}>
        <ProfileHeader
          component="header"
          ChooseFile={ChooseFile}
          fileData={file ? file.data : ''}
        />
        <ProfileMain
          user={user ?? {}}
          editStatus={editStatus}
          saveUserData={saveUserData}
        />
        <ProfileFooter editStatus={editStatus} editFields={editFields} />
      </Box>
    </Container>
  )
}
