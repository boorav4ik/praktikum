import { EmptyCell } from 'game/utils/moveCells'

export function initEmptyCells(size: number) {
  return Array.from(Array(size), () => EmptyCell)
}
