import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { Button } from '../../components/Button'

interface ProfileFooterProps {
  editStatus: string
  editFields: (status: string) => void
}
export function ProfileFooter({ editStatus, editFields }: ProfileFooterProps) {
  const navigate = useNavigate()

  const checkCancel = () => {
    if (editStatus === 'info') {
      navigate('/')
      return
    }
    editFields('cancel')
  }

  const checkSave = () => {
    if (editStatus === 'info') {
      editFields('edit')
      return
    }
    editFields('save')
  }

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
      }}>
      <Button onClick={checkSave}>
        {editStatus === 'info' ? 'Редактировать' : 'Сохранить'}
      </Button>
      <Button onClick={checkCancel}>
        {editStatus === 'info' ? 'Играть!' : 'Отмена'}
      </Button>
    </Box>
  )
}
