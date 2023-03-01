import { FC } from 'react'
import { Box, Container } from '@mui/material'

type Props = FC;
const ThemePage: Props = () => {

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
      </Box>
    </Container>
  )
}

export {ThemePage}