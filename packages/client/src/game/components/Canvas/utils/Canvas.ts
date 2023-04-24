import { ArrowDirection } from '../../../utils/ArrowDirections'
import { Cells, Cell, Effect } from '../../../utils/moveCells'
import { getColor } from './getColort'

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
  x: number,
  y: number
) {
  ctx.font = 'bold 24px Raleway'
  ctx.fillStyle = '#ffffffb3'
  ctx.textAlign = 'center'
  ctx.fillText(String(value), x, y, 120)
}

function calculateСoordinates(
  row: number,
  column: number,
  frame: number,
  direction?: ArrowDirection
) {
  const x = row * 120 + 70,
    y = column * 120 + 70
  if (!direction) return { x, y }

  const bias = 120 * (1 - (frame + 1) / 12)

  switch (direction) {
    case ArrowDirection.ArrowUp:
      return { x, y: y + bias }
    case ArrowDirection.ArrowDown:
      return { x, y: y - bias }
    case ArrowDirection.ArrowLeft:
      return { x: x + bias, y }
    case ArrowDirection.ArrowRight:
      return { x: x - bias, y }
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

  const { x, y } = calculateСoordinates(
    row,
    column,
    frame,
    effect === Effect.moving ? direction : undefined
  )

  switch (effect) {
    case Effect.appears:
      drawRoundSquare(ctx, x, y, getColor(value), (frame + 1) / 12)
      drawCellText(ctx, value, x, y + 10)
      break
    case Effect.moving:
      drawRoundSquare(ctx, x, y, getColor(value))
      drawCellText(ctx, value, x, y + 10)
      break
    case Effect.idle:
    default:
      drawRoundSquare(ctx, x, column * 120 + 70, getColor(value))
      if (value) drawCellText(ctx, value, x, y + 10)
      break
  }
}

export function drawCells(
  ctx: CanvasRenderingContext2D,
  cells: Cells,
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
