import { Cells } from './moveCells'

export function checkGameIsOver(cells: Cells) {
  return !cells.some(value => !value)
}
