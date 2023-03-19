class Cell {
  width: number

  coordinates: { [key: string]: number }

  value: number

  column: number

  row: number

  constructor(row: number, column: number, width: number) {
    this.width = width
    this.coordinates = { x: 0, y: 0 }
    this.value = 0
    this.column = column
    this.row = row
    this.defineCanvasCoordinates()
  }

  defineCanvasCoordinates() {
    this.coordinates.x = this.column * this.width + 5 * (this.column + 1)
    this.coordinates.y = this.row * this.width + 5 * (this.row + 1)
  }
}

export { Cell }
