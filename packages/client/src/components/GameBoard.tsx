import Box from '@mui/material/Box'
import { Canvas } from '../game/components/Canvas'
import { DoubleTypography } from './DoubleTypography'

export function GameBoard() {
  return (
    <Box
      sx={{
        height: 540,
        width: 540,
        borderRadius: 16,
        border: '3px solid #1E515D',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <DoubleTypography
        first={{ content: 'Счёт:' }}
        second={{ content: ' 100500' }}
        sx={{ fontSize: 24 }}
      />
      <Canvas />
    </Box>
  )
}
