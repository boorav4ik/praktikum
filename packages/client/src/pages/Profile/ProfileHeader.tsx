import { Box } from '@mui/material'
import React, { FC, useState } from 'react'
import { AvatarBox } from '../../components/AvatarBox'

interface ProfileHeaderProps {
  component: string
  ChooseFile: (event: React.ChangeEvent<HTMLInputElement>) => void
  fileData: string | ArrayBuffer | null
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({
  ChooseFile,
  fileData,
}) => {
  return (
    <Box component="header">
      <input
        accept="image/*"
        id="avatar-icon-file"
        type="file"
        style={{ display: 'none' }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          ChooseFile(event)
        }
      />
      <label htmlFor="avatar-icon-file">
        <AvatarBox
          src={fileData as string}
          sx={{
            width: '100px',
            height: '100px',
            bgcolor: '#1E515D',
            cursor: 'pointer',
          }}
        />
      </label>
    </Box>
  )
}
