import { useEffect } from 'react'
import { ArrowDirection } from '../../../utils/ArrowDirections'

export function useArrow(calback: (direction: ArrowDirection) => void) {
  const move = (e: KeyboardEvent) => {
    if (e.key in ArrowDirection) calback(e.key as ArrowDirection)
  }

  useEffect(() => {
    window.addEventListener('keyup', move)

    return () => {
      window.removeEventListener('keyup', move)
    }
  })
}
