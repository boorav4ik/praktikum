import { Box, Container } from '@mui/material'
import { useState } from 'react'
import { deepEqual } from '../../utils/deepEqual'
import { ProfileFooter } from './ProfileFooter'
import { ProfileHeader } from './ProfileHeader'
import { ProfileMain } from './ProfileMain'

interface FileProps {
  data: string | ArrayBuffer | null
  info: File
}

export function ProfilePage() {
  const [editStatus, setEditStatus] = useState<string>('info')
  const [file, setFile] = useState<FileProps>()
  const [user, setUser] = useState<object>({
    firstName: 'Василий',
    secondName: 'Пупкин',
    phone: '+7 916 000 00 00',
    email: 'example@mail.com',
    login: 'Vasilij',
    password: '************',
  })

  const saveUserData = (newUserData: object | undefined, status: string) => {
    if (status === 'cancel') {
      setEditStatus('info')
      console.log('Отмена изменений. Ждем redux')
      return
    }
    const newData = { ...user, ...newUserData }
    const checkUser = deepEqual(user, newData)
    if (!checkUser || file) {
      console.log('Save data to Server: user data + avatar')
      setUser(newData)
    }
    setEditStatus('info')
  }

  const editFields = (status: string) => {
    setEditStatus(status)
  }

  const ChooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          borderRadius: 16,
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
          user={user}
          editStatus={editStatus}
          saveUserData={saveUserData}
        />
        <ProfileFooter editStatus={editStatus} editFields={editFields} />
      </Box>
    </Container>
  )
}
