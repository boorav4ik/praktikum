import { Box } from '@mui/material'
import { FC, ChangeEvent } from 'react'
import { AvatarBox } from '../../components/AvatarBox'

interface ProfileHeaderProps {
  component: string
  onChooseFile: (event: ChangeEvent<HTMLInputElement>) => void
  fileData: string | ArrayBuffer | null
}
export function ProfileHeader({ onChooseFile, fileData }: ProfileHeaderProps) {
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
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChooseFile(event)
          }
        />
      </label>
    </Box>
  )
}
