import { ArrowDirection } from '../../../utils/ArrowDirections'
import { type Cell, Effect } from '../../../utils/moveCells'
import { getColor } from './getColort'

const GRID_STEP = 120
const GRID_INDENT = 70

type Point = { x: number; y: number }

function drawRoundSquare(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  bgColor: string,
  frameScale = 1
) {
  const r = 5 * frameScale //radius of border
  const a = 55 * frameScale //side of square
  if (bgColor) ctx.fillStyle = bgColor

  ctx.beginPath()
  ctx.moveTo(x + a - r, y - a)
  ctx.quadraticCurveTo(x + a, y - a, x + a, y + r - a) //top, left
  ctx.lineTo(x + a, y + a - r)
  ctx.quadraticCurveTo(x + a, y + a, x + a - r, y + a) //top, right
  ctx.lineTo(x + r - a, y + a)
  ctx.quadraticCurveTo(x - a, y + a, x - a, y + a - r) //bottom, right
  ctx.lineTo(x - a, y - a + r)
  ctx.quadraticCurveTo(x - a, y - a, x - a + r, y - a) //bottom, left
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
}

function drawCellText(
  ctx: CanvasRenderingContext2D,
  value: number,
  { x, y }: Point
) {
  ctx.font = 'bold 24px Raleway'
  ctx.fillStyle = '#ffffffb3'
  ctx.textAlign = 'center'
  ctx.fillText(String(value), x, y + 10, 120)
}

function getCellCenterCoordinates(row: number, column: number) {
  return {
    x: row * GRID_STEP + GRID_INDENT,
    y: column * GRID_STEP + GRID_INDENT,
  }
}

function directionBiasSwitch(
  bias: number,
  direction?: ArrowDirection
): (point: Point) => Point {
  console.log(bias)

  switch (direction) {
    case ArrowDirection.ArrowUp:
      return ({ x, y }) => ({ x, y: y + bias })
    case ArrowDirection.ArrowDown:
      return ({ x, y }) => ({ x, y: y - bias })
    case ArrowDirection.ArrowLeft:
      return ({ x, y }) => ({ x: x + bias, y })
    case ArrowDirection.ArrowRight:
      return ({ x, y }) => ({ x: x - bias, y })
  }
  return point => point
}

function addMoving(point: Point, frame: number, direction?: ArrowDirection) {
  const bias = 120 * (1 - (frame + 1) / 12)
  return directionBiasSwitch(bias, direction)(point)
}

function addShake(point: Point, frame: number, direction?: ArrowDirection) {
  const bias = (frame % 4) - 3
  return directionBiasSwitch(bias, direction)(point)
}

function addEffect(effect: Effect) {
  switch (effect) {
    case Effect.Moving:
      return addMoving
    case Effect.Shake:
      return addShake
    default:
      return (point: Point) => point
  }
}

function drawCell(
  ctx: CanvasRenderingContext2D,
  row: number,
  column: number,
  cell: Cell,
  frame: number,
  direction?: ArrowDirection
) {
  const [value, effect] = cell
  const { x, y } = addEffect(effect)(
    getCellCenterCoordinates(row, column),
    frame,
    direction
  )

  switch (effect) {
    case Effect.Appears:
      drawRoundSquare(ctx, x, y, getColor(value), (frame + 1) / 12)
      drawCellText(ctx, value, { x, y })
      break
    case Effect.Moving:
    case Effect.Shake:
    case Effect.Idle:
    default:
      drawRoundSquare(ctx, x, y, getColor(value))
      if (value) drawCellText(ctx, value, { x, y })
      break
  }
}

export function drawCells(
  ctx: CanvasRenderingContext2D,
  cells: Cell[],
  frame: number,
  direction?: ArrowDirection
) {
  ctx.lineWidth = 4
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        direction === ArrowDirection.ArrowUp ||
        direction === ArrowDirection.ArrowLeft
      ) {
        const index = 15 - i - 4 * j
        drawCell(ctx, 3 - i, 3 - j, cells[index], frame, direction)
      } else {
        const index = i + j * 4
        drawCell(ctx, i, j, cells[index], frame, direction)
      }
    }
  }
}

export function clearCanvas(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, 500, 500)
}
