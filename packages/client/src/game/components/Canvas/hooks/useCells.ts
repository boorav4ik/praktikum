import { useState } from 'react'
import { ArrowDirection } from '../../../utils/ArrowDirections'
import { transformations } from '../../../utils/Transformations'
import { moveCells } from '../../../utils/moveCells'
import { initCells } from '../../../utils/initCells'
import { addNewCell } from '../../../utils/addNewCels'
import { checkGameIsOver } from '../../../utils/checkGameIsOver'

type UseCells = [
  number[],
  boolean,
  (direction: ArrowDirection) => void,
  () => void
]

export function useCells(mode: 'game' | 'guide'): UseCells {
  const [cells, setCells] = useState(mode === 'guide' ? Array(16) : initCells)
  const [isGameOver, setIsGameOver] = useState(false)

  function move(direction: ArrowDirection) {
    const transformIndex = transformations.getTransformation(direction)

    const { output, movedLayers } = moveCells(cells, transformIndex)

    if (mode === 'game' && !movedLayers.size)
      return setIsGameOver(checkGameIsOver(cells))

    addNewCell(output, movedLayers, transformIndex)
    setCells(output)
  }

  function restart() {
    setCells(initCells)
    setIsGameOver(false)
  }

  return [cells, isGameOver, move, restart]
}
