import React, { FC, useState, useEffect } from 'react'
import { TextField } from '@mui/material'

interface ProfileFieldsProps {
  value: string
  label: string
  editStatus: string
  changeDataUser: (newUserData: object) => void
}

export const ProfileFields: FC<ProfileFieldsProps> = ({
  value,
  label,
  editStatus,
  changeDataUser,
}) => {
  const [text, setText] = useState<string>(value)

  return (
    <TextField
      key={value}
      id={value}
      disabled={editStatus === 'info' ? true : false}
      label={label}
      value={text}
      variant="filled"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => (
        setText(event.target.value),
        changeDataUser({ [label]: event.target.value })
      )}
    />
  )
}
