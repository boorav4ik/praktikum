import { Box, Container } from '@mui/material'
import { GameBoard } from '../../components/GameBoard'

export function MainPage() {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <GameBoard />
      </Box>
    </Container>
  )
}
