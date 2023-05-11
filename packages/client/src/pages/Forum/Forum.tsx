import { useEffect } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ForumRow } from 'components/forum/ForumRow'
import TopicIcon from '@mui/icons-material/Topic'
import { useForum } from 'hooks/useForum'
import { HeaderForPage } from 'components/forum/HeaderForPage'

function ForumPage() {
  const navigate = useNavigate()
  const [{ themes }, { getTheme }] = useForum()

  useEffect(() => {
    getTheme()
  }, [])

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
        <HeaderForPage text={'Форум'} />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          maxWidth={'99%'}
          marginY={2}
          rowSpacing={4}>
          {themes.map(theme => (
            <ForumRow
              key={theme.id}
              onClick={() =>
                navigate(`/forum/${theme.id}`, {
                  state: { theme },
                })
              }
              icon={() => <TopicIcon />}
              text={theme.theme}
              btnText={'Темы'}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
export { ForumPage }
