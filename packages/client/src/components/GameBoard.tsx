import { useMemo, useState } from 'react'
import { useArrow } from '../game/hooks/useArrow'
import { type ArrowDirection } from '../game/utils/ArrowDirections'
import { transformations } from '../game/utils/Transformations'
import { type Cell, moveCells } from '../game/utils/moveCells'
import { addNewCell } from '../game/utils/addNewCels'
import { Board } from './Board'
import { initCells } from '../game/utils/initCells'
import moveSound from '../assets/audio/cards-scrape.mp3'
import errorSound from '../assets/audio/erro-tech.mp3'

function move(cells: Cell[], direction: ArrowDirection) {
  const transform = transformations.getTransformation(direction)
  const { output, movedLayers } = moveCells([...cells], transform)
  if (!movedLayers.size) return //nothing changed

  addNewCell(output, movedLayers, transform)
  return output
}

export function GameBoard({ soundDisabled = true }) {
  const [cells, setCells] = useState<Cell[]>(initCells)

  const moveSoundEffect = useMemo(
    () => !soundDisabled && new Audio(moveSound),
    [soundDisabled]
  )

  const errorSoundEffect = useMemo(
    () => !soundDisabled && new Audio(errorSound),
    [soundDisabled]
  )

  const direction = useArrow((direction: ArrowDirection) => {
    const newState = move(cells, direction)

    if (newState) {
      !soundDisabled && moveSoundEffect && moveSoundEffect.play()
      setCells(newState)
    } else {
      //TODO: error animation
      !soundDisabled && errorSoundEffect && errorSoundEffect.play()
      window.navigator.vibrate([
        10, 3, 10, 3, 10, 20, 20, 3, 20, 3, 20, 20, 10, 3, 10, 3, 10,
      ])
    }
  })

  return <Board cells={cells} direction={direction} />
}
