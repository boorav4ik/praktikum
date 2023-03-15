import { FC, ChangeEvent } from 'react'
import { TextField } from '@mui/material'

interface ProfileFieldsProps {
  value: string
  label: string
  editStatus: string
  changeDataUser: (newUserData: object) => void
}
export function ProfileFields({ value, label, editStatus, changeDataUser }: ProfileFieldsProps) {
  return (
    <TextField
      key={value}
      id={value}
      disabled={editStatus === 'info'}
      label={label}
      defaultValue={value}
      variant="filled"
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        changeDataUser({ [label]: event.target.value })
      }
    />
  )
}
