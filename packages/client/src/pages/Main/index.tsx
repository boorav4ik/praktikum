import { Box, Container, Fab, SvgIcon, Tooltip } from '@mui/material'
import { GameBoard } from '../../components/GameBoard'
import GraphicEq from '@mui/icons-material/GraphicEq'
import { useState } from 'react'

export function MainPage() {
  const [isSoundEffectsDisabled, setIsSoundEffectsDisabled] = useState(true)

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <GameBoard soundDisabled={isSoundEffectsDisabled}/>
      </Box>
      <Tooltip
        title={`${
          isSoundEffectsDisabled ? 'Включить' : 'Выключить'
        } звуковые эффекты`}>
        <Fab
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          onClick={() => setIsSoundEffectsDisabled(state => !state)}>
          {isSoundEffectsDisabled ? (
            <GraphicEq />
          ) : (
            <SvgIcon>
              <path d="M 7 18 h 2 V 6 H 7 v 12 z M 11 22 H 13 v -20 h -2 v 20 z m -8 -8 h 2 v -4 H 3 v 4 z m 12 4 h 2 V 6 h -2 v 12 z m 4 -8 v 4 h 2 v -4 h -2 z M 18 22 h 3 L 6 2 h -3 Z" />
            </SvgIcon>
          )}
        </Fab>
      </Tooltip>
    </Container>
  )
}
