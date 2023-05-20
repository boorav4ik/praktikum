import type { Cell } from './moveCells'

export function checkGameIsOver(cells: Cell[]) {
  return !cells.some(value => !value)
}
