// import { useEffect } from 'react'
import Box from '@mui/material/Box'
import { DoubleTypography } from './DoubleTypography'
import { Canvas } from '../game/components/Canvas'

export function GameBoard() {
  // Для запуска игры надо нажать enter
  // const alertGame = React.useCallback(() => {
  //   alert('Please press the enter for start the game')
  // }, [])

  // useEffect(() => {
  //   alertGame()
  // }, [])

  return (
    <Box
      sx={{
        height: 570,
        width: 540,
        borderRadius: 4,
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
      <Box>
        <Canvas />
      </Box>
    </Box>
  )
}
