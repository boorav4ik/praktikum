import { ArrowDirection } from './ArrowDirections'

export type TransformationMethod = (i: number, j: number) => number

class IndexTransformations {
  static upDirection: TransformationMethod = (i, j) => j * 4 + i

  static downDirection: TransformationMethod = (i, j) => (4 - j - 1) * 4 + i

  static leftDirection: TransformationMethod = (i, j) => j + i * 4

  static rightDirection: TransformationMethod = (i, j) => 4 - j - 1 + i * 4

  getTransformation(direction: ArrowDirection) {
    switch (direction) {
      case ArrowDirection.ArrowUp:
        return IndexTransformations.upDirection
      case ArrowDirection.ArrowDown:
        return IndexTransformations.downDirection
      case ArrowDirection.ArrowLeft:
        return IndexTransformations.leftDirection
      case ArrowDirection.ArrowRight:
        return IndexTransformations.rightDirection
    }
  }
}

export const transformations = new IndexTransformations()
