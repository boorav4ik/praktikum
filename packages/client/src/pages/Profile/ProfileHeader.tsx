import { Box } from '@mui/material'
import { FC, ChangeEvent } from 'react'
import { AvatarHost } from '../../api/config'
import { AvatarBox } from '../../components/AvatarBox'

interface ProfileHeaderProps {
  component: string
  ChooseFile: (event: ChangeEvent<HTMLInputElement>) => void
  fileData: string | ArrayBuffer | null
  avatar: string | null
}

export function ProfileHeader({
  ChooseFile,
  fileData,
  avatar,
}: ProfileHeaderProps) {
  return (
    <Box component="header">
      <label>
        <AvatarBox
          src={fileData ? (fileData as string) : `${AvatarHost}${avatar}`}
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
          onChange={(event: ChangeEvent<HTMLInputElement>) => ChooseFile(event)}
        />
      </label>
    </Box>
  )
}
