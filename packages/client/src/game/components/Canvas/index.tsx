import { useEffect, useRef } from 'react'
import { useArrow } from './hooks/useArrow'
import { useCells } from './hooks/useCells'
import { clearCanvas, drawCells } from './utils/Canvas'
import { EndGameDialog } from '../EndGameDialod'

export function Canvas() {
  const [cells, gameOver, moveCells, restart] = useCells()

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useArrow(moveCells)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')!
      clearCanvas(ctx)
      drawCells(ctx, cells)
    }
  }, [...cells])

  return (
    <>
      <canvas width={500} height={500} ref={canvasRef} />
      <EndGameDialog open={gameOver} onRestartClick={restart} />
    </>
  )
}
