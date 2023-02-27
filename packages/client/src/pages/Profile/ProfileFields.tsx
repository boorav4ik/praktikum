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
  return (
    <TextField
      key={value}
      id={value}
      disabled={editStatus === 'info' ? true : false}
      label={label}
      defaultValue={value}
      variant="filled"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        changeDataUser({ [label]: event.target.value })
      }
    />
  )
}
