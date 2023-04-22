import { useState } from 'react'
import { useArrow } from '../game/hooks/useArrow'
import { ArrowDirection } from '../game/utils/ArrowDirections'
import { transformations } from '../game/utils/Transformations'
import { Cells, moveCells } from '../game/utils/moveCells'
import { addNewCell } from '../game/utils/addNewCels'
import { Board } from './Board'
import { initCells } from '../game/utils/initCells'

function getNewCells(cells: Cells, direction: ArrowDirection) {
  const transform = transformations.getTransformation(direction)
  const { output, movedLayers } = moveCells([...cells], transform)
  addNewCell(output, movedLayers, transform)
  return output
}

export function GameBoard() {
  const [cells, setCells] = useState<Cells>(initCells)

  const direction = useArrow((direction: ArrowDirection) =>
    setCells(state => getNewCells(state, direction))
  )

  return <Board cells={cells} direction={direction} />
}
