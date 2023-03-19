import { useState } from 'react'
import { ArrowDirection } from '../utils/ArrowDirections'
import { getIndex } from '../utils/getIndex'

function initCells() {
  const state = Array(16)

  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * 15)
    state[index] = 2
  }

  return state
}

export function useCells(): [number[], (direction: ArrowDirection) => void] {
  const [cells, setCells] = useState(initCells)

  function moveCells(direction: ArrowDirection) {
    const index = getIndex(direction)

    const output: number[] = []
    const isMoved: Set<number> = new Set()

    for (let i = 0; i < 4; i++) {
      const stack = [0, 1, 2, 3].map(j => cells[index(i, j)])
      let isMerged = false
      for (let j = 1; j < 4; j++) {
        if (stack[j]) {
          if (!stack[j - 1]) {
            stack[j - 1] = stack[j]
            stack[j] = 0
            isMoved.add(i)
          } else if (!isMerged && stack[j - 1] === stack[j]) {
            isMerged = true
            stack[j - 1] *= 2
            stack[j] = 0
            isMoved.add(i)
          }
        }
        stack.forEach((value, j) => (output[index(i, j)] = value))
      }
    }

    output[index(Math.floor(Math.random() * isMoved.size), 3)] = 2
    setCells(output)
  }
  return [cells, moveCells]
}
