import { Effect } from 'game/utils/moveCells'
import { initEmptyCells } from './initEmptyCells'

export function initGuideCells(size: number) {
  const cells = initEmptyCells(size)
  cells[5] = [2, Effect.Appears]
  cells[10] = [2, Effect.Appears]
  return cells
}
