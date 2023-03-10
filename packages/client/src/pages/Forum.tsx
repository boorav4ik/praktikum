import { FC, useEffect, useState } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { HeaderForPage } from '../components/HeaderForPage'
import { ForumRow } from '../components/ForumRow'
import { ChatSmileIcon } from '../components/icons/ChatSmileIcon'
import { defaultThemes } from '../mocs/forum'

export type ForumTheme = {
  id: number
  text: string
  themeName: string
}

type Props = FC
const ForumPage: Props = () => {
  const navigate = useNavigate()
  const [themes, setThemes] = useState<ForumTheme[]>([])
  useEffect(() => {
    setThemes(defaultThemes)
  }, [])
  const goToTheme = (theme: ForumTheme) => {
    navigate(`/forum/${theme.themeName}`, {
      state: { theme },
    })
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
        <HeaderForPage text={'Форум'} />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          maxWidth={'90%'}
          marginY={2}
          rowSpacing={4}>
          {themes.map(theme => (
            <ForumRow
              key={theme.id}
              onClick={() => goToTheme(theme)}
              icon={() =>
                ChatSmileIcon({
                  width: '25',
                  height: '25',
                  viewBox: '0 0 25 25',
                })
              }
              text={theme.text}
              btnText={'Темы'}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
export { ForumPage }
