import { useState } from 'react'
import { Box, Container } from '@mui/material'
import { Fab } from 'components/FloatingActionButton'
import GraphicEq from '@mui/icons-material/GraphicEq'
import Vibration from '@mui/icons-material/Vibration'
import School from '@mui/icons-material/School'
import { GameBoard, GameMode } from 'components/Game'


export function MainPage() {
  const [isSoundEffectsDisabled, setIsSoundEffectsDisabled] = useState(true)
  const [isVibrationDisabled, setIsVibrationDisabled] = useState(true)
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.Guide)

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <GameBoard
          soundDisabled={isSoundEffectsDisabled}
          vibrationDisable={isVibrationDisabled}
          mode={gameMode}
        />
      </Box>
      <Fab
        active={gameMode === GameMode.Guide}
        order={4}
        title={`${
          gameMode === GameMode.Guide ? 'Выключить' : 'Включить'
        } режим обучения`}
        onClick={() =>
          setGameMode(state =>
            state === GameMode.Guide ? GameMode.Default : GameMode.Guide
          )
        }>
        <School />
      </Fab>
      <Fab
        order={2}
        active={!isSoundEffectsDisabled}
        onClick={() => setIsSoundEffectsDisabled(state => !state)}
        title={`${
          isSoundEffectsDisabled ? 'Включить' : 'Выключить'
        } звуковые эффекты`}>
        <GraphicEq />
      </Fab>
      <Fab
        active={!isVibrationDisabled}
        order={3}
        title={`${isVibrationDisabled ? 'Включить' : 'Выключить'} вибрацию`}
        onClick={() => setIsVibrationDisabled(state => !state)}>
        <Vibration />
      </Fab>
    </Container>
  )
}
