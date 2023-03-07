import { Box, Container } from '@mui/material';
import { GameBoard } from '../components/GameBoard';
import { NavBar } from '../components/NavBar';

export function MainPage() {
  return (
    <Container component="main" maxWidth={false}>
      <Box sx={{ my: 10, display: 'flex', justifyContent: "center" }}>
        <NavBar />
        <GameBoard />
      </Box>
    </Container>
  )
}
