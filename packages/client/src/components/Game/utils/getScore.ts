import { type Cell } from '../../../game/utils/moveCells'

export function getScore(cells: Cell[]) {
  return cells.reduce((s, [value]) => s + value, 0)
}
