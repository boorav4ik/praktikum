import { Box, GridProps, Stack } from '@mui/material'
import { Message } from 'pages/Forum/ThemeBranch'
import Typography from '@mui/material/Typography'

export type ThemeBranchMessageProps = {
  message: Message
  gridProps?: GridProps
}

export function MessageRow({ gridProps, message }: ThemeBranchMessageProps) {
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
      <Box>
        <Typography color={'white'} fontWeight={500}>
          {text}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'end' }}>
        <Typography color={'white'} fontWeight={500}>
          {user.name}
        </Typography>
      </Box>
    </Stack>
  )
}
