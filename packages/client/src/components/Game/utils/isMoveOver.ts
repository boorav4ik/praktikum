import { ArrowDirection } from 'game/utils/ArrowDirections'
import { transformations } from 'game/utils/Transformations'
import { type Cell, moveCells } from 'game/utils/moveCells'

export function isMoveOver(cells: Cell[]) {
  return Object.values(ArrowDirection).every(
    direction =>
      !moveCells(cells, transformations.getTransformation(direction))
        .movedLayers.size
  )
}
