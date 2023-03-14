import { ThemeBranch } from './Themes'
import { FormEvent, useEffect, useState } from 'react'
import { HeaderForPage } from '../../components/forum/HeaderForPage'
import { Box, Container, Stack, TextField } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'
import { mockedMessages } from '../../mocs/forum'
import { MessageRow } from '../../components/forum/ThemeBranchMessage'
import { ColorButton } from '../../components/forum/ForumRow'
import Typography from '@mui/material/Typography'

export type Message = {
  id: number
  user: {
    id: number
    name: string
  }
  text: string
}
export type FullThemeBranch = ThemeBranch & {
  text: string
  messages: Message[]
}

const configSxGreenTextField = {
  color: '#FFFFFF',
  minWidth: 500,
  backgroundColor: '#1E515D',
  border: '2px solid white',
  borderRadius: 1,
  label: {
    backgroundColor: '#1E515D',
    color: '#FFFFFF',
  },
  '&:hover': {
    backgroundColor: '#1E515D',
  },
  '.MuiInputBase-multiline': {
    backgroundColor: '#1E515D',
  },
  '& .MuiInputBase-root': {
    backgroundColor: '#1E515D',
    '&:after': {
      display: 'none',
    },
    '&:before': {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: '#1E515D',
    },
    '& .Mui-focused': {
      backgroundColor: '#1E515D',
    },
  },
}

function ThemeBranchPage() {
  const { theme_name, theme_branch } = useParams()
  const { state } = useLocation()
  const headerText = state?.branch?.name ?? 'Loading...'
  const [message, setMessage] = useState<Message[]>([])
  const [text, setText] = useState<string>('default')

  useEffect(() => {
    Promise.resolve()
      .then(() => {
        setText('some text')
      })
      .then(() => {
        setMessage(mockedMessages)
      })
  }, [theme_name, theme_branch])

  const sendMessage = (e: FormEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & { comment: { value: string } }
    const msg = target.comment.value

    setMessage([
      ...message,
      { id: Math.random(), text: msg, user: { id: 1, name: 'John Doe' } },
    ])
  }

  return (
    <Container component="main" maxWidth="md">
      <Box
        bgcolor="background.paper"
        sx={{
          display: 'flex',
          borderRadius: 2,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          my: 10,
          border: '3px solid #1E515D',
          p: 3,
        }}>
        <HeaderForPage
          text={headerText}
          state={state}
          backPath={`/forum/${theme_name}`}
        />
        <Box
          bgcolor="background.btn"
          sx={{
            display: 'flex',
            width: '100%',
            borderRadius: 2,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            mb: 3,
            mt: 2,
            border: '3px solid #1E515D',
            p: 3,
          }}>
          <Typography color={'white'} fontWeight={500}>
            {text}
          </Typography>
        </Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}>
          {message.map(msg => (
            <MessageRow key={msg.id} message={msg} />
          ))}
        </Stack>
        <Box
          alignItems={'center'}
          display={'flex'}
          justifyContent={'center'}
          width={'100%'}>
          <form onSubmit={sendMessage}>
            <Box alignItems={'center'} display={'flex'} sx={{ marginTop: 2 }}>
              <TextField
                name="comment"
                label="Ваш комментарий"
                variant="filled"
                multiline
                maxRows={2}
                sx={configSxGreenTextField}
              />
              <ColorButton
                sx={{ marginLeft: 1, color: 'white' }}
                type={'submit'}
                variant="outlined">
                Отправить
              </ColorButton>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  )
}

export { ThemeBranchPage }
