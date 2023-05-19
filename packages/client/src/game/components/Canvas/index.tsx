import { useEffect, useRef } from 'react'
import { EmptyCell, type Cell } from 'game/utils/moveCells'
import { FrameRenderer } from './utils/Canvas'
import type { ArrowDirection } from 'game/utils/ArrowDirections'

export type CanvasProps = {
  cells: Cell[]
  direction?: ArrowDirection
}
export function Canvas({ cells, direction }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let animationFrame: number
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!

    function renderFrame(frame: number) {
      //10ms * 12 frames
      if (frame < 12) {
        setTimeout(() => {
          renderFrame(frame + 1)
        }, 10)
        FrameRenderer.call(ctx, cells, frame, direction)
        animationFrame = window.requestAnimationFrame(renderFrame)
      }
    }
    renderFrame(0)

    return () => {
      window.cancelAnimationFrame(animationFrame)
    }
  }, [cells])

  return <canvas width={500} height={500} ref={canvasRef} />
}

Canvas.defaultProps = {
  cells: Array.from(Array(16), () => EmptyCell),
}
