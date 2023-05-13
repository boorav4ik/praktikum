import Avatar, { type AvatarProps } from '@mui/material/Avatar'
import { AddUserIcon } from './AddUserIcon'

export function AvatarBox({ children }: AvatarProps) {
  return (
    <Avatar
      variant="rounded"
      sx={{
        width: '100px',
        height: '100px',
        bgcolor: '#1E515D',
        cursor: 'pointer',
      }}>
      {children || <AddUserIcon />}
    </Avatar>
  )
}
