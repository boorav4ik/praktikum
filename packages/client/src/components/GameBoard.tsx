import { useState } from 'react';
import Box from '@mui/material/Box';
import { DubleTypography } from './DoubleTypography';
import { GameField } from './GameField';

export function GameBoard() {
  const [score, setScore] = useState(0);
  const updateScore = (value: number) => {
    setScore(value);
  }

  return (
    <Box
      sx={{
        height: 570,
        width: 540,
        borderRadius: 0,
        border: '3px solid #1E515D',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <DubleTypography
        first={{ content: 'Счёт:' }}
        second={{ content: String(score) }}
        sx={{fontSize: 24}}
      />
      <Box>
        <GameField updateScore={updateScore} />
      </Box>
    </Box>
  )
}
