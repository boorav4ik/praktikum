import { Box, Container } from '@mui/material'
import { GameBoard } from 'components/GameBoard'
import { Description } from './Description'

export function MainPage() {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <GameBoard />
        <Description />
      </Box>
    </Container>
  )
}
