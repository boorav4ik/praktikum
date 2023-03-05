import { Box } from '@mui/material'
import React, { FC } from 'react'
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
      <label>
        <AvatarBox
          src={fileData as string}
          sx={{
            width: '100px',
            height: '100px',
            bgcolor: '#1E515D',
            cursor: 'pointer',
          }}
        />
        <input
          accept="image/*"
          type="file"
          style={{ display: 'none' }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            ChooseFile(event)
          }
        />
      </label>
    </Box>
  )
}
