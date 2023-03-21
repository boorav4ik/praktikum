import { useEffect, useRef } from 'react'
import { Cells } from '../../utils/moveCells'
import { clearCanvas, drawCells } from './utils/Canvas'

export function Canvas({ cells }: { cells: Cells }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')!
      clearCanvas(ctx)
      drawCells(ctx, cells)
    }
  }, [...cells])

  return <canvas width={500} height={500} ref={canvasRef} />
}
