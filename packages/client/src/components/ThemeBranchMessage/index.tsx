import { FC } from 'react'
import { GridProps, Stack } from '@mui/material'
import { Message } from '../../pages/ThemeBranch'

type Props = {
  message: Message
  gridProps?: GridProps
}

export const MessageRow: FC<Props> = ({ gridProps, message }) => {
  const { text, user } = message
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      sx={{
        color: 'white',
        fontSize: 20,
        border: '2px solid white',
        borderRadius: 1,
        justifyContent: 'center',
        paddingX: 2,
      }}
      {...gridProps}>
      <div>{text}</div>
      <div style={{ textAlign: 'end' }}>{user.name}</div>
    </Stack>
  )
}
