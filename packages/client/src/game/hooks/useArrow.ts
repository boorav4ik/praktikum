import { useEffect, useState } from 'react'
import { ArrowDirection } from '../utils/ArrowDirections'

export function useArrow(calback: (direction: ArrowDirection) => void) {
  const [direction, setDirection] = useState<ArrowDirection>()

  const move = (e: KeyboardEvent) => {
    if (e.key in ArrowDirection) {
      const direction: ArrowDirection = e.key as ArrowDirection
      calback(direction)
      setDirection(direction)
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', move)

    return () => {
      window.removeEventListener('keyup', move)
    }
  }, [calback])
  return direction
}
