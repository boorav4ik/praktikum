import { Box, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { ThemeBranchMessageProps } from 'store/slices/forum/interfaces'

export function MessageRow({ gridProps, messages }: ThemeBranchMessageProps) {
  const { text, author } = messages

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
          {author}
        </Typography>
      </Box>
    </Stack>
  )
}
