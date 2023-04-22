import { type Cells, Effect } from './moveCells'
import { EmptyCell } from './moveCells'
export function initCells(): Cells {
  const state: Cells = Array.from(Array(16), () => EmptyCell)

  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * 15)
    state[index] = [2, Effect.appears]
  }

  return state
}
