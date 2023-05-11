import { initEmptyCells } from './initEmptyCells'
import { Effect } from 'game/utils/moveCells'

export function initCells(size: number) {
  const cells = initEmptyCells(size)
  for (let i = 0; i < 4; i++) {
    cells[Math.floor(Math.random() * size - 1)] = [2, Effect.Appears]
  }
  return cells
}
