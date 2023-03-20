import { RefObject, Component, createRef } from 'react'
import { Cell } from '../core/Cell'
import { Cells } from '../core/Cells'
import {
  turnColor,
  deepCopy,
  copyCellsValue,
  insertRowValues,
  mergeLeft,
  mergeRight,
  isFullfied,
  isEqualCells,
  insertColumnValues,
  checkRows,
  checkColumns
} from '../utils'

type roundRectType = {
  width: number
  height: number
  fillColor: string
  coordinates: { [key: string]: number }
  borderRadius: number
  font?: string
  fontSize?: string
  fontColor?: string
  value?: number
}

// Кто знает как правильно ловить предыдущий стейт?
let prevStateCells: Cell[][] = []

class Canvas extends Component {
  public canvasWidth: number
  public canvasHeight: number
  private initCells: Cells
  public cells: Cell[][]
  public size: number
  private canvasRef: RefObject<HTMLCanvasElement>
  public state: {[key: string]: Cell[][]}

  constructor(props = {}) {
    super(props)
    this.canvasWidth = 500
    this.canvasHeight = 500
    this.size = 4
    this.canvasRef = createRef<HTMLCanvasElement>()
    this.initCells = new Cells(this.size, this.canvasWidth)

    this.cells = deepCopy(this.initCells.cells as Cell[][]) as Cell[][]

    this.state = {
      cells: this.cells,
    }

    this.startGame = this.startGame.bind(this)
    this.move = this.move.bind(this)
  }

  componentDidMount() {
    const canvas = this.canvasRef.current as HTMLCanvasElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    this.drawRoundRect(context, {
      width: this.canvasWidth,
      height: this.canvasWidth,
      fillColor: 'transparent',
      coordinates: { x: 0, y: 0 },
      borderRadius: 10,
    })

    this.drawCells(context)

    window.addEventListener('keydown', this.startGame, false)
  }

  componentDidUpdate(): void {
    const canvas = this.canvasRef.current as HTMLCanvasElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    this.drawCells(context)
  }

  shouldComponentUpdate(
    _: Record<string, unknown>,
    nextState: Record<string, Cell[][]>
  ): boolean {
    if (!isEqualCells(prevStateCells, nextState.cells)) {
      return true
    } else {
      return false
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.startGame, false)
    window.removeEventListener('keydown', this.move, false)
  }

  drawCells(context: CanvasRenderingContext2D) {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const fillColor = turnColor(this.state.cells[i][j].value)
        const width = this.state.cells[i][j].width
        const fontSize = Math.floor(width / 2) + ''
        this.drawRoundRect(context, {
          width,
          height: width,
          fillColor,
          coordinates: this.state.cells[i][j].coordinates,
          borderRadius: 10,
          value: this.state.cells[i][j].value,
          fontSize,
          fontColor: '#fff',
          font: 'Geneva',
        })
      }
    }
  }

  startGame(e: KeyboardEvent) {
    if (e.code === 'Enter') {
      this.randomPasteNewCell()
      this.randomPasteNewCell()

      window.removeEventListener('keydown', this.startGame, false)
      window.addEventListener('keydown', this.move, false)
    }
  }

  move(e: KeyboardEvent) {
    if (e.code === 'keyA' || e.code === 'ArrowLeft') {
      this.moveHorizontally(mergeLeft)
    }
    if (e.code === 'keyD' || e.code === 'ArrowRight') {
      this.moveHorizontally(mergeRight)
    }
    if (e.code === 'keyW' || e.code === 'ArrowUp') {
      this.moveVertically(mergeLeft)
    }
    if (e.code === 'keyS' || e.code === 'ArrowDown') {
      this.moveVertically(mergeRight)
    }
    setTimeout(() => {
      this.endGame()
    }, 100)
  }

  moveHorizontally(cb: (_: number[]) => number[]) {
    const copyCells = deepCopy(this.state.cells)
    prevStateCells = deepCopy(copyCells)
    const updateCells = [] as Cell[][]
    for (let i = 0; i < this.size; i++) {
      const values = copyCellsValue(copyCells[i]) as number[]
      const mergeValues = cb(values)
      const updateCellsRow = insertRowValues(copyCells[i], mergeValues)
      updateCells.push(updateCellsRow)
    }
    this.setState(
      {
        ...this.state,
        cells: [...updateCells],
      },
      () => {
        if (!isEqualCells(prevStateCells, updateCells)) {
          this.randomPasteNewCell()
        }
      }
    )
  }

  moveVertically(cb: (_: number[]) => number[]) {
    const copyCells = deepCopy(this.state.cells)
    prevStateCells = deepCopy(copyCells)
    const updateValues = []
    for (let i = 0; i < this.size; i++) {
      const values = []
      for (let j = 0; j < this.size; j++) {
        values.push(copyCells[j][i].value)
      }
      const mergeValues = cb(values)
      updateValues.push(mergeValues)
    }
    const updateCells = insertColumnValues(copyCells, updateValues)
    this.setState(
      {
        ...this.state,
        cells: [...updateCells],
      },
      () => {
        if (!isEqualCells(prevStateCells, updateCells)) {
          this.randomPasteNewCell()
        }
      }
    )
  }
  // Если указать тип CanvasRenderingContext2D тесты не проходят
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  drawRoundRect(context: any, options: roundRectType) {
    context.beginPath()
    context.roundRect(
      options.coordinates.x,
      options.coordinates.y,
      options.width,
      options.height,
      options.borderRadius
    )

    context.fillStyle = options.fillColor as string
    context.fill()

    if (options.value) {
      context.font = `900 ${options.fontSize}px ${options.font}`
      context.fillStyle = options.fontColor as string
      context.textAlign = 'center'
      context.fillText(
        String(options.value),
        Math.floor(options.coordinates.x + options.width / 2.05),
        Math.floor(options.coordinates.y + options.width / 1.45)
      )
    }
  }

  randomPasteNewCell(): Canvas | void {
    if (!isFullfied(prevStateCells)) {
      const row = Math.floor(Math.random() * this.size)
      const col = Math.floor(Math.random() * this.size)

      if (!this.state.cells[row][col].value) {
        const value = 2 * Math.ceil(Math.random() * 2)
        const newState = this.state.cells
        newState[row][col].value = value
        this.setState({
          ...this.state,
          cells: [...newState],
        })
        return
      } else {
        return this.randomPasteNewCell()
      }
    }
  }

  endGame() {
    if (isFullfied(this.state.cells)) {
      if ((!checkRows(this.state.cells) || !checkColumns(this.state.cells))) {
        window.removeEventListener('keydown', this.move, false)
        alert('HaHA!! Loh!!! Press the enter')
        this.setState({
          ...this.state,
          cells: this.initCells.cells,
        })
        window.addEventListener('keydown', this.startGame, false)
      }
    }
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        width={this.canvasWidth}
        height={this.canvasHeight}
      />
    )
  }
}

export { Canvas }
