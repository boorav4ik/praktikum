import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { Button } from '../../components/Button'
import { useInputsValidate } from '../../hooks/useInputsValidate'
import { validate } from '../../utils/formInputValidators/validate'
import { useAuth } from '../../hooks/useAuth'

interface ProfileFooterProps {
  // editStatus: string
  editFields: (status: string) => void
}

export const ProfileFooter: FC<ProfileFooterProps> = ({
  // editStatus,
  editFields,
}) => {
  const navigate = useNavigate()
  const { clearErrors } = useInputsValidate(true, validate)
  const [{ editStatus }, { updateEditStatus }] = useAuth()

  const checkCancel = () => {
    if (editStatus === 'info') {
      navigate('/')
      return
    }
    editFields('cancel')
    clearErrors()
  }

  const checkSave = () => {
    if (editStatus === 'info') {
      updateEditStatus('edit')
      // editFields('edit')
      return
    }
    updateEditStatus('save')
    // editFields('save')
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
