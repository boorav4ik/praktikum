import { useEffect, useState, useRef } from 'react'
import { ArrowDirection } from '../utils/ArrowDirections'

export function useArrow(calback: (direction: ArrowDirection) => void) {
  const [direction, setDirection] = useState<ArrowDirection>()
  const timer = useRef<NodeJS.Timeout>()

  const moveWithDebounce = (e: KeyboardEvent) => {
    if (timer.current) return

    timer.current = setTimeout(() => {
      timer.current = undefined
    }, 120) //10ms * 12 frames

    if (e.key in ArrowDirection) {
      const direction: ArrowDirection = e.key as ArrowDirection
      calback(direction)
      setDirection(direction)
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', moveWithDebounce)

    return () => {
      window.removeEventListener('keyup', moveWithDebounce)
    }
  }, [calback])

  return direction
}
