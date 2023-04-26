import { useState } from 'react'
import { Box, Container } from '@mui/material'
import { Fab } from '../../components/FloatingActionButton'
import GraphicEq from '@mui/icons-material/GraphicEq'
import Vibration from '@mui/icons-material/Vibration'
import School from '@mui/icons-material/School'
import { Game, GameMode } from '../../components/GameBoard'

export function MainPage() {
  const [isSoundEffectsDisabled, setIsSoundEffectsDisabled] = useState(true)
  const [isVibrationDisabled, setIsVibrationDisabled] = useState(true)
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.Guide)

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Game
          soundDisabled={isSoundEffectsDisabled}
          vibrationDisable={isVibrationDisabled}
          mode={gameMode}
        />
      </Box>
      <Fab
        active={gameMode === GameMode.Guide}
        order={0}
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
      {/* TODO: add confirm dialog on switch to guide mode */}
      <Fab
        order={1}
        active={!isSoundEffectsDisabled}
        onClick={() => setIsSoundEffectsDisabled(state => !state)}
        title={`${
          isSoundEffectsDisabled ? 'Включить' : 'Выключить'
        } звуковые эффекты`}>
        <GraphicEq />
      </Fab>
      <Fab
        active={!isVibrationDisabled}
        order={2}
        title={`${isVibrationDisabled ? 'Включить' : 'Выключить'} вибрацию`}
        onClick={() => setIsVibrationDisabled(state => !state)}>
        <Vibration />
      </Fab>
    </Container>
  )
}
