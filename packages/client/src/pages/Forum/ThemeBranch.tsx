import { FormEvent, useEffect } from 'react'
import { HeaderForPage } from 'components/forum/HeaderForPage'
import { Box, Container, Stack, TextField } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { MessageRow } from 'components/forum/ThemeBranchMessage'
import { ColorButton } from 'components/forum/ForumRow'
import Typography from '@mui/material/Typography'
import { useAuth } from 'hooks/useAuth'
import { useForum } from 'hooks/useForum'
import GarbageIcon from 'components/forum/icons/GarbageIcon'

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
  const { theme_name } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const [{ user }] = useAuth()
  const [{ comments }, { createComment, getCommentsForTopic, deleteComment }] =
    useForum()

  useEffect(() => {
    if (!comments) {
      getCommentsForTopic(state.topic.id)
    }
  }, [])

  const sendMessage = (e: FormEvent) => {
    e.preventDefault()

    if (!user) {
      navigate('/login')
    }
    const target = e.target as typeof e.target & { comment: { value: string } }
    const msg = target.comment.value

    if (!msg.length) return
    createComment({
      id_topic: state.topic.id,
      text: msg,
      id_theme: state.topic.id_theme,
      id_author: user?.id.toString(),
      author: user?.display_name,
    })
    target.comment.value = ''
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
          text={state?.topic?.title}
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
            {state?.topic?.description}
          </Typography>
        </Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}>
          {comments &&
            comments.map(msg => (
              <Box
                key={msg.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                }}>
                <MessageRow messages={msg} />
                <ColorButton
                  onClick={() => deleteComment(msg)}
                  sx={{
                    marginLeft: 1,
                    color: 'white',
                    width: 10,
                    maxWidth: 35,
                    maxHeight: 35,
                  }}
                  type={'submit'}
                  variant="outlined">
                  {GarbageIcon({
                    width: '25',
                    height: '25',
                    viewBox: '0 0 512 512',
                  })}
                </ColorButton>
              </Box>
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
