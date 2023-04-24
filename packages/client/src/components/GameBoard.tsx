import { useMemo, useState } from 'react'
import { useArrow } from '../game/hooks/useArrow'
import { type ArrowDirection } from '../game/utils/ArrowDirections'
import { type Cell } from '../game/utils/moveCells'
import { Board } from './Board'
import shiftSound from '../assets/audio/cards-scrape.mp3'
import errorSound from '../assets/audio/erro-tech.mp3'
import { GameModeWrapper } from './GameModeSwitch'

export type GameBoardProps = {
  soundDisabled: boolean
  vibrationDisable: boolean
  initCells: () => Cell[]
  moveCells: (cells: Cell[], direction: ArrowDirection) => Cell[] | undefined
}

function GameBoard({
  soundDisabled,
  vibrationDisable,
  ...props
}: GameBoardProps) {
  const [cells, setCells] = useState<Cell[]>(props.initCells)

  const soundEffects = useMemo(
    () =>
      !soundDisabled && {
        shift: new Audio(shiftSound),
        error: new Audio(errorSound),
      },
    [soundDisabled]
  )

  const direction = useArrow((direction: ArrowDirection) => {
    const newCells = props.moveCells(cells, direction)
    if (newCells) {
      !soundDisabled && soundEffects && soundEffects.shift.play()
      setCells(newCells)
    } else {
      //TODO: error animation
      !soundDisabled && soundEffects && soundEffects.error.play()
      !vibrationDisable &&
        window.navigator.vibrate([
          10, 3, 10, 3, 10, 20, 20, 3, 20, 3, 20, 20, 10, 3, 10, 3, 10,
        ])
    }
  })

  return <Board cells={cells} direction={direction} />
}

export const Game = GameModeWrapper(GameBoard)

export type GameBordType = typeof GameBoard
