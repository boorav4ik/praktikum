import { Cell } from './Cell'

class Cells {
  cells: Cell[][] | null

  size: number

  canvasWidth: number

  cellWidth: number

  constructor(size: number, canvasWidth: number) {
    this.size = size
    this.canvasWidth = canvasWidth
    this.cellWidth = Math.floor(this.canvasWidth / this.size - 6)
    this.cells = this.initCells(this.size, this.cellWidth)
  }

  initCells(size: number, width: number) {
    const result: Cell[][] = []

    for (let i = 0; i < size; i++) {
      result[i] = []

      for (let j = 0; j < size; j++) {
        result[i][j] = new Cell(i, j, width)
      }
    }

    return result
  }
}

export { Cells }
