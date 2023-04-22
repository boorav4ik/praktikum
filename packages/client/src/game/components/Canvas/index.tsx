import { useEffect, useRef } from 'react'
import { type Cells } from '../../utils/moveCells'
import { clearCanvas, drawCells } from './utils/Canvas'
import { type ArrowDirection } from '../../utils/ArrowDirections'

export type CanvasProps = {
  cells: Cells
  direction?: ArrowDirection
}

export function Canvas({ cells, direction }: CanvasProps) {
  console.log({ cells, direction })

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let animationFrame: number
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!

    function renderFrame(frame: number) {
      if (frame < 12) {
        setTimeout(() => {
          renderFrame(frame + 1)
        }, 120)
        clearCanvas(ctx)
        drawCells(ctx, cells, frame, direction)
        animationFrame = window.requestAnimationFrame(renderFrame)
      }
    }
    renderFrame(0)

    return () => {
      console.log({ animationFrame })

      window.cancelAnimationFrame(animationFrame)
    }
  }, [...cells])

  return <canvas width={500} height={500} ref={canvasRef} />
}
