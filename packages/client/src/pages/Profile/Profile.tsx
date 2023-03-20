import { Box, Container, Modal } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { deepEqual } from '../../utils/deepEqual'
import { ProfileFooter } from './ProfileFooter'
import { ProfileHeader } from './ProfileHeader'
import { ProfileMain } from './ProfileMain'
import { useAuth } from '../../hooks/useAuth'
import { ProfileChangePassword } from './ProfileChangePassword/ProfileChangePassword'
import { FileProps } from '../../store/slices/auth/interfaces'
import { Button } from '../../components/Button'

export function ProfilePage() {
  const [
    { user, userData },
    { changeProfile, changeAvatar, changePassword, updateUserData },
  ] = useAuth()
  const [editStatus, setEditStatus] = useState<string>('info')
  const [file, setFile] = useState<FileProps>()
  const [modal, setModal] = useState<boolean>(false)

  const saveUserData = (newUserData: object | undefined, status: string) => {
    if (status === 'cancel') {
      console.log('cancel111')
      updateUserData(user)
      setEditStatus('info')
      setFile({} as FileProps)
      return
    }

    // const newData = { ...user!, ...newUserData }
    // const checkUser = deepEqual(user, newData)
    // if (!checkUser) {
    //   changeProfile(newData)
    // }
    // if (file) {
    //   changeAvatar(file)
    // }
    // setEditStatus('info')
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
          borderRadius: 16,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          my: 10,
          border: '3px solid #1E515D',
          p: 3,
        }}>
        <Modal
          open={modal}
          onClose={setModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <ProfileChangePassword
            handleModal={setModal}
            handleChangePassword={changePassword}
          />
        </Modal>

        <ProfileHeader
          component="header"
          ChooseFile={ChooseFile}
          fileData={file ? file.data : ''}
          avatar={user!.avatar}
        />
        <ProfileMain
          user={userData ?? {}}
          editStatus={editStatus}
          saveUserData={saveUserData}
        />
        <Button onClick={() => setModal(prev => !prev)}>Изменить пароль</Button>
        <ProfileFooter editStatus={editStatus} editFields={editFields} />
      </Box>
    </Container>
  )
}
