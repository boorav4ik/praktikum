import { getColor } from './getColort'

function drawRoundSquare(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  bgColor: string
) {
  const r = 10 //radius of border
  const a = 110 //side of square

  if (bgColor) ctx.fillStyle = bgColor

  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + a - r, y)
  ctx.quadraticCurveTo(x + a, y, x + a, y + r)
  ctx.lineTo(x + a, y + a - r)
  ctx.quadraticCurveTo(x + a, y + a, x + a - r, y + a)
  ctx.lineTo(x + r, y + a)
  ctx.quadraticCurveTo(x, y + a, x, y + a - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
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

function drawCell(
  ctx: CanvasRenderingContext2D,
  row: number,
  column: number,
  value: number
) {
  drawRoundSquare(ctx, row * 120 + 15, column * 120 + 15, getColor(value))
  drawCellText(ctx, value, row * 120 + 70, column * 120 + 80)
}

export function drawCells(ctx: CanvasRenderingContext2D, cells: number[]) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const index = i + j * 4
      const value = cells[index]
      if (value) drawCell(ctx, i, j, value)
    }
  }
}

export function clearCanvas(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, 500, 500)
}
