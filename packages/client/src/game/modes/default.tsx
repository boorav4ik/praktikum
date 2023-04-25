import { useEffect } from 'react'
import { useArrow } from '../hooks/useArrow'
import { Board } from '../../components/Board'
import { Effect } from '../utils/moveCells'
import { moveCells, type Cell, EmptyCell } from '../utils/moveCells'
import { transformations } from '../utils/Transformations'
import { type ArrowDirection } from '../utils/ArrowDirections'
import { addNewCell } from '../utils/addNewCels'

export function DefaultMode({
  handleUdateCells,
  soundEffects,
  ...props
}: {
  cells?: Cell[]
  handleUdateCells: (cells: Cell[]) => void
  soundEffects: false | { shift: HTMLAudioElement; shake: HTMLAudioElement }
}) {
  const direction = useArrow(move)

  function move(direction: ArrowDirection) {
    const transform = transformations.getTransformation(direction)
    const { cells, movedLayers } = moveCells([...props.cells!], transform)
    if (!movedLayers.size) {
      soundEffects && soundEffects.shake.play()
      handleUdateCells(cells.map(([value]: Cell) => [value, Effect.Shake]))
    } else {
      addNewCell(cells, movedLayers, transform)
      soundEffects && soundEffects.shift.play()
      handleUdateCells(cells)
    }
  }

  useEffect(() => {
    if (props.cells) return
    const newCells = Array.from(Array(16), () => EmptyCell)
    for (let i = 0; i < 4; i++) {
      newCells[Math.floor(Math.random() * 15)] = [2, Effect.Appears]
    }
    handleUdateCells(newCells)
  }, [])

  return <Board {...props} direction={direction} />
}
