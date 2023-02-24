import Box from '@mui/material/Box'
import { DubleTypography } from './DoubleTypography'

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
      <DubleTypography
        first={{ content: 'Счёт:' }}
        second={{ content: ' 100500' }}
        sx={{fontSize: 24}}
      />
      <Box></Box>
    </Box>
  )
}
