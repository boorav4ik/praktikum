import { TransformationMethod } from './Transformations'
import { type Cell, Effect } from './moveCells'

export function addNewCell(
  cells: Cell[],
  movedLayers: Set<number>,
  transformIndex: TransformationMethod,
  value?: number
) {
  const addNewCellLayerIndex = [...movedLayers][
    Math.floor(Math.random() * movedLayers.size)
  ]
  cells[transformIndex(addNewCellLayerIndex, 3)] = [
    value ?? Math.random() >= 0.95 ? 4 : 2,
    Effect.Appears,
  ]

  return cells
}
