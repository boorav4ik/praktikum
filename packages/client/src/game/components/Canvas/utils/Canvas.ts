import { ArrowDirection } from '../../../utils/ArrowDirections'
import { type Cell, Effect } from '../../../utils/moveCells'
import { getColor } from './getColort'

const GRID_STEP = 120
const GRID_INDENT = 70
const RADIUS = 5
const LENGTH = 55

type Point = { x: number; y: number }

type addEffectMethod = (p: Point) => Point

class CellRenderer {
  private shakeBias = 0
  private moveBias = 0
  private scale = 1

  constructor(
    private readonly ctx: CanvasRenderingContext2D,
    private readonly frame: number,
    private readonly direction?: ArrowDirection
  ) {
    if (direction) {
      this.shakeBias = (frame % 4) - 3
      this.moveBias = 120 * (1 - (frame + 1) / 12)
    }
    this.scale = (frame + 1) / 12
  }

  private drawRoundSquare({ x, y }: Point, bgColor: string, isScale: boolean) {
    const r = RADIUS * (Number(!isScale) || this.scale) //radius of border
    const a = LENGTH * (Number(!isScale) || this.scale) //side of square

    this.ctx.beginPath()
    this.ctx.moveTo(x + a - r, y - a)
    this.ctx.quadraticCurveTo(x + a, y - a, x + a, y + r - a) //top, left
    this.ctx.lineTo(x + a, y + a - r)
    this.ctx.quadraticCurveTo(x + a, y + a, x + a - r, y + a) //top, right
    this.ctx.lineTo(x + r - a, y + a)
    this.ctx.quadraticCurveTo(x - a, y + a, x - a, y + a - r) //bottom, right
    this.ctx.lineTo(x - a, y - a + r)
    this.ctx.quadraticCurveTo(x - a, y - a, x - a + r, y - a) //bottom, left
    this.ctx.closePath()
    if (bgColor) {
      this.ctx.fillStyle = bgColor
      this.ctx.fill()
    }
    this.ctx.stroke()
  }

  private drawCellText(value: number, { x, y }: Point) {
    this.ctx.font = 'bold 24px Raleway'
    this.ctx.fillStyle = '#ffffffb3'
    this.ctx.textAlign = 'center'
    this.ctx.fillText(String(value), x, y + 10, 120)
  }

  private getCellCenterCoordinates(row: number, column: number): Point {
    return {
      x: row * GRID_STEP + GRID_INDENT,
      y: column * GRID_STEP + GRID_INDENT,
    }
  }

  private directionBiasSwitch(bias: number): addEffectMethod {
    if (!this.direction) return point => point
    switch (this.direction) {
      case ArrowDirection.ArrowUp:
        return ({ x, y }) => ({ x, y: y + bias })
      case ArrowDirection.ArrowDown:
        return ({ x, y }) => ({ x, y: y - bias })
      case ArrowDirection.ArrowLeft:
        return ({ x, y }) => ({ x: x + bias, y })
      case ArrowDirection.ArrowRight:
        return ({ x, y }) => ({ x: x - bias, y })
    }
  }

  private addMoving: addEffectMethod = point => {
    return this.directionBiasSwitch(this.moveBias)(point)
  }

  private addShake: addEffectMethod = point => {
    return this.directionBiasSwitch(this.shakeBias)(point)
  }

  private addEffect(effect: Effect): addEffectMethod {
    switch (effect) {
      case Effect.Moving:
        return this.addMoving
      case Effect.Shake:
        return this.addShake
      default:
        return point => point
    }
  }

  public render([value, effect]: Cell, row: number, column: number) {
    const center = this.addEffect(effect)(
      this.getCellCenterCoordinates(row, column)
    )
    this.drawRoundSquare(center, getColor(value), effect === Effect.Appears)
    if (value) this.drawCellText(value, center)
  }
}

export function FrameRenderer(
  this: CanvasRenderingContext2D,
  cells: Cell[],
  frame: number,
  direction?: ArrowDirection
) {
  this.clearRect(0, 0, 500, 500)
  this.lineWidth = 4
  const isReverse =
    direction === ArrowDirection.ArrowUp ||
    direction === ArrowDirection.ArrowLeft

  const cellRenderer = new CellRenderer(this, frame, direction)

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (isReverse) cellRenderer.render(cells[15 - i - 4 * j], 3 - i, 3 - j)
      else cellRenderer.render(cells[i + j * 4], i, j)
    }
  }
}
