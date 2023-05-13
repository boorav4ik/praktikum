import Box from '@mui/material/Box'
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
  const src = fileData ?? avatar ? `${AvatarHost}${avatar}` : undefined

  return (
    <Box component="header">
      <label>
        <AvatarBox src={src} />
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
