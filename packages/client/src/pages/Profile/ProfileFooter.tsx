import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { Button } from '../../components/Button'

interface ProfileFooterProps {
  editStatus: string
  editFields: (status: string) => void
}

export const ProfileFooter: FC<ProfileFooterProps> = ({
  editStatus,
  editFields,
}) => {
  const navigate = useNavigate()
  const [editButtonName, setEditButtonNanme] = useState<string>('Редактировать')
  const [cancelButtonName, setCancelButtonNanme] = useState<string>('Играть!')

  useEffect(() => {
    setEditButtonNanme(editStatus === 'info' ? 'Редактировать' : 'Сохранить')
    setCancelButtonNanme(editStatus === 'info' ? 'Играть!' : 'Отмена')
  }, [editStatus])

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
      <Button onClick={checkSave}>{editButtonName}</Button>
      <Button onClick={checkCancel}>{cancelButtonName}</Button>
    </Box>
  )
}
