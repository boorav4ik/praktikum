import { FC, useEffect, useState } from 'react'
import { Box, Container } from '@mui/material'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { HeaderForPage } from '../components/HeaderForPage';

export type ForumTheme = {
  id: number,
  text: string,
  themeName: string
}
export const defaultThemes: ForumTheme[] = [
  {
    id: 1,
    text: 'Отзывы',
    themeName: 'reviews'
  }, {
    id: 2,
    text: 'Технологии',
    themeName: 'technologies'
  }, {
    id: 3,
    text: 'Называние',
    themeName: 'namings'
  }
]
type Props = FC;
const ForumPage: Props = () => {
  const navigate = useNavigate()
  const [themes, setThemes] = useState<ForumTheme[]>([])
  useEffect(() => {
    setThemes(defaultThemes)
  }, [])
  const goToTheme = (theme: ForumTheme) => {
    navigate(`/forum/${theme.themeName}`, {
      state: theme
    })
  }
  return (
    <Container component='main' maxWidth='md'>
      <Box
        bgcolor='background.paper'
        sx={
          {
            display: 'flex',
            borderRadius: 2,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            my: 10,
            border: '3px solid #1E515D',
            p: 3,
          }
        }>
        <HeaderForPage text={'Форум'}/>
        {
          themes.map(theme => (
            <div key={theme.id}>
              <span>{theme.text}</span>
              <Button onClick={() => goToTheme(theme)}>Темы</Button>
            </div>
          ))
        }
      </Box>
    </Container>
  )
}
export { ForumPage }