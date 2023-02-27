import { Box, Button, Container, Typography } from '@mui/material'
import { GameBoard } from '../components/GameBoard'
export function MainPage() {
  return (
    <Container component="main" maxWidth="sm">
      <Box></Box>
      <GameBoard />
    </Container>
  )
}
