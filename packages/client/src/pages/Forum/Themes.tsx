import { useEffect, useState } from 'react'
import { Box, Container, Grid, Modal } from '@mui/material'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'components/Button'
import { ForumRow } from 'components/forum/ForumRow'
import { useForum } from 'hooks/useForum'
import { ForumComments, ForumTopic } from 'store/slices/forum/interfaces'
import { useAuth } from 'hooks/useAuth'
import { NewTopic } from './NewTopic'
import { HeaderForPage } from 'components/forum/HeaderForPage'
import DeleteIcon from '@mui/icons-material/Delete'
import MessageIcon from '@mui/icons-material/Message'

function ThemePage() {
  const [modal, setModal] = useState<boolean>(false)
  const [{ user }] = useAuth()

  const navigate = useNavigate()
  const { theme_name } = useParams()
  const { state } = useLocation()
  const [{ topics }, { getTopicByTheme, updateComments, deleteTopic }] =
    useForum()

  useEffect(() => {
    getTopicByTheme(state.theme.id)
  }, [])

  const goToTopic = (topic: ForumTopic) => {
    navigate(`/forum/${theme_name}/${topic.id}`, {
      state: { theme: state.theme, topic: topic },
    })
    updateComments(topic.Comments as ForumComments)
  }

  const style = {
    width: '20%',
    height: 50,
    bgcolor: 'background.paper',
    border: '2px solid #1E515D',
    boxShadow: 24,
    fontWeight: 700,
    fontSize: 16,
  }

  return (
    <Container component="main" maxWidth="md">
      <Box
        bgcolor="background.paper"
        sx={{
          display: 'flex',
          borderRadius: 2,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          my: 10,
          border: '3px solid #1E515D',
          p: 3,
        }}>
        <Modal
          open={modal}
          onClose={setModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <>
            <NewTopic handleModal={setModal} id_theme={state.theme.id} />
          </>
        </Modal>

        <Box sx={{ width: '90%', display: 'flex', flexDirection: 'row' }}>
          <HeaderForPage text={'Темы'} backPath={'/forum'} />
          {user && (
            <Button sx={style} onClick={() => setModal(true)}>
              Новая тема
            </Button>
          )}
        </Box>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          maxWidth={'99%'}
          marginY={2}
          rowSpacing={4}>
          {topics.map(topic => (
            <ForumRow
              key={topic.id}
              onClick={() => goToTopic(topic)}
              icon={() => <MessageIcon />}
              deleteClick={() => deleteTopic(topic)}
              iconDelete={() => <DeleteIcon />}
              text={topic.title}
              btnText="Ответы"
              btnDelText={'Удалить'}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export { ThemePage }
