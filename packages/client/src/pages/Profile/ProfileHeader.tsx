import { Box } from '@mui/material'
import { ChangeEvent } from 'react'
import { AvatarHost } from 'api/config'
import { AvatarBox } from 'components/AvatarBox'

interface ProfileHeaderProps {
  component: string
  onChooseFile: (event: ChangeEvent<HTMLInputElement>) => void
  fileData: string | ArrayBuffer | undefined | null
  avatar: string | null | undefined
}

export function ProfileHeader({
  onChooseFile,
  fileData,
  avatar,
}: ProfileHeaderProps) {
  return (
    <Box component="header">
      <label>
        <AvatarBox
          src={(fileData ?? `${AvatarHost}${avatar}`) as string}
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
          onChange={onChooseFile}
        />
      </label>
    </Box>
  )
}
