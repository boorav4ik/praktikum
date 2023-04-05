import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { Button } from 'components/Button'
import { useAuth } from 'hooks/useAuth'

interface ProfileFooterProps {
  isValid: boolean
}

export function ProfileFooter({ isValid }: ProfileFooterProps) {
  const navigate = useNavigate()
  const [{ editStatus }, { updateEditStatus }] = useAuth()

  const checkCancel = () => {
    editStatus === 'info' ? navigate('/') : updateEditStatus('cancel')
  }

  const checkSave = () => {
    editStatus === 'info' ? updateEditStatus('edit') : updateEditStatus('save')
  }

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        mt: 2,
      }}>
      <Button type="submit" onClick={checkSave} disabled={!isValid}>
        {editStatus === 'info' ? 'Редактировать' : 'Сохранить'}
      </Button>
      <Button onClick={checkCancel}>
        {editStatus === 'info' ? 'Играть!' : 'Отмена'}
      </Button>
    </Box>
  )
}
