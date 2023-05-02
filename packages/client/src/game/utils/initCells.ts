import { type Cell, Effect } from './moveCells'
import { EmptyCell } from './moveCells'
export function initCells(): Cell[] {
  const state: Cell[] = Array.from(Array(16), () => EmptyCell)

  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * 15)
    state[index] = [2, Effect.Appears]
  }

  return state
}
