import { ThemeBranch } from './Themes'
import { FC, useEffect, useState } from 'react'
import { HeaderForPage } from '../components/HeaderForPage'
import { Box, Container, Stack, TextField } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'
import { mockedMessages } from '../mocs/forum'
import { MessageRow } from '../components/ThemeBranchMessage'

export type Message = {
  id: number,
  user: {
    id: number,
    name: string
  },
  text: string,
}
export type FullThemeBranch = ThemeBranch & {
  text: string,
  messages: Message[]
}

type Props = FC;

const ThemeBranchPage: Props = () => {
  const { theme_name, theme_branch } = useParams();
  const { state } = useLocation();
  const headerText = state?.branch?.name ?? 'Loading...';
  const [message, setMessage] = useState<Message[]>([]);
  const [text, setText] = useState<string>('default');
  useEffect(() => {
    Promise.resolve().then(() => {
      setText('some text');
    }).then(() => {
      setMessage(mockedMessages)
    })
  }, [ theme_name, theme_branch])
  return (
    <Container component='main' maxWidth='md'>
      <Box
        bgcolor='background.paper'
        sx={
          {
            display: 'flex',
            borderRadius: 2,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-around',
            my: 10,
            border: '3px solid #1E515D',
            p: 3
          }
        }>
        <HeaderForPage text={headerText} state={state} backPath={`/forum/${theme_name}`} />
        <Box
          bgcolor='background.btn'
          sx={
            {
              display: 'flex',
              width: '100%',
              borderRadius: 2,
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              mb: 3,
              mt: 2,
              border: '3px solid #1E515D',
              p: 3
            }
          }>
          <p>{text}</p>
        </Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >{
          message.map((msg) => (
            <MessageRow
              key={msg.id}
              message={msg}
            />
          ))
        }
        </Stack>
        <TextField
          id="comment"
          label="Ваш комментарий"
          variant="filled"
          multiline
          maxRows={2}
          sx={
            {
              color: '#FFFFFF',
              paddingX: 2,
              marginTop: 2,
              backgroundColor: '#1E515D',
              border: '2px solid white',
              borderRadius: 1,
              'label':{
                backgroundColor: '#1E515D',
                color: '#FFFFFF',
              },
              '&:hover': {
                backgroundColor: '#1E515D',
              },
              '& .MuiInputBase-root': {
                backgroundColor: '#1E515D',
                '&:after': {
                  display: 'none',
                  // borderBottom: 0,
                },
                '&:before': {
                  display: 'none',
                  // borderBottom: 0,
                },
              },
            }
          }
        />
      </Box>
    </Container>
  )
}
export {ThemeBranchPage}