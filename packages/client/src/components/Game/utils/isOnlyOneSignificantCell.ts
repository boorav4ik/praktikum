import type { Cell } from 'game/utils/moveCells'

export function isOnlyOneSignificantCell(cells: Cell[]) {
  return cells.filter(([value]) => value).length === 1
}
