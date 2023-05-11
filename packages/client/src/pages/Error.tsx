import { Container, Typography } from '@mui/material'
import bgErrorPage from 'static/svg/bgErrorPage.svg'

interface Error {
  code?: string
  message: string
}

const notFoundError: Error = {
  code: '404',
  message: 'Ошибка! Страница не найдена, но мы потом поищем...',
}

export function ErrorPage({ error = notFoundError }: { error?: Error }) {
  return (
    <Container
      component="main"
      sx={{
        pt: 20,
        height: '100vh',
        backgroundImage: `url(${bgErrorPage})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        textAlign: 'center',
      }}>
      <Typography sx={{ fontSize: 128 }}>{error.code}</Typography>
      <Typography>{error.message}</Typography>
    </Container>
  )
}
