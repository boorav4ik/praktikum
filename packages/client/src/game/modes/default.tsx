import { ArrowDirection } from '../utils/ArrowDirections'
import { transformations } from '../utils/Transformations'
import { addNewCell } from '../utils/addNewCels'
import { Cell, Effect, EmptyCell, moveCells } from '../utils/moveCells'

export class DefaultMode {
  init() {
    const cells = Array.from(Array(16), () => EmptyCell)
    for (let i = 0; i < 4; i++) {
      cells[Math.floor(Math.random() * 15)] = [2, Effect.Appears]
    }
    return cells
  }

  move(previousCells: Cell[], direction: ArrowDirection) {
    const transform = transformations.getTransformation(direction)
    const { cells, movedLayers } = moveCells([...previousCells], transform)
    if (!movedLayers.size) return null
    addNewCell(cells, movedLayers, transform)
    return cells
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getLegend(cells: Cell[], step: number): { header?: string; footer?: string } {
    return {
      header: `Score: ${cells.reduce((s, [value]) => s * (value || 1), 1)}`,
    }
  }
}

export const defaultMode = new DefaultMode()
