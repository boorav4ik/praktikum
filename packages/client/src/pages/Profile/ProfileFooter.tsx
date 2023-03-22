import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/useAuth'
import { isEmptyObjField } from '../../utils/isEmptyObject'

interface ProfileFooterProps {
  errors: object
  clearErrors: () => void
}
export function ProfileFooter({ editStatus, editFields }: ProfileFooterProps) {

export function ProfileFooter({ errors, clearErrors }: ProfileFooterProps) {
  const navigate = useNavigate()
  const [{ editStatus }, { updateEditStatus }] = useAuth()

  const checkCancel = () => {
    editStatus === 'info'
      ? navigate('/')
      : (clearErrors(), updateEditStatus('cancel'))
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
      <Button onClick={checkSave} disabled={!isEmptyObjField(errors)}>
        {editStatus === 'info' ? 'Редактировать' : 'Сохранить'}
      </Button>
      <Button onClick={checkCancel}>
        {editStatus === 'info' ? 'Играть!' : 'Отмена'}
      </Button>
    </Box>
  )
}
