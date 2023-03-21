import { Cells } from './moveCells'

export function initCells(): Cells {
  const state: Cells = Array(16)

  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * 15)
    state[index] = 2
  }

  return state
}
