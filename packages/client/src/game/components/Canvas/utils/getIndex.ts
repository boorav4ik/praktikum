import { ArrowDirection } from './ArrowDirections'

export function getIndex(
  direction: ArrowDirection
): (i: number, j: number) => number {
  switch (direction) {
    case ArrowDirection.ArrowUp:
      return (i, j) => j * 4 + i
    case ArrowDirection.ArrowDown:
      return (i, j) => (4 - j - 1) * 4 + i
    case ArrowDirection.ArrowLeft:
      return (i, j) => j + i * 4
    case ArrowDirection.ArrowRight:
      return (i, j) => 4 - j - 1 + i * 4
  }
}
