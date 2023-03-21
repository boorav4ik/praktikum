import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { Button } from '../../components/Button'
import { useInputsValidate } from '../../hooks/useInputsValidate'
import { validate } from '../../utils/formInputValidators/validate'
import { useAuth } from '../../hooks/useAuth'

export function ProfileFooter() {
  const navigate = useNavigate()
  const { clearErrors } = useInputsValidate(true, validate)
  const [{ editStatus }, { updateEditStatus }] = useAuth()

  const checkCancel = () => {
    editStatus === 'info'
      ? navigate('/')
      : (updateEditStatus('cancel'), clearErrors())
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
      <Button onClick={checkSave}>
        {editStatus === 'info' ? 'Редактировать' : 'Сохранить'}
      </Button>
      <Button onClick={checkCancel}>
        {editStatus === 'info' ? 'Играть!' : 'Отмена'}
      </Button>
    </Box>
  )
}
