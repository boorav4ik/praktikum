import Avatar, { AvatarProps } from '@mui/material/Avatar'
import { AddUserIcon } from './AddUserIcon'

export function AvatarBox(props: AvatarProps) {
  return (
    <Avatar variant="rounded" sx={{ p: '50px', bgcolor: '#1E515D' }} {...props}>
      {!props.src && <AddUserIcon />}
    </Avatar>
  )
}
