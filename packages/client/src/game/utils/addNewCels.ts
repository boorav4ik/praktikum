import { TransformationMethod } from './Transformations'
import { Cells } from './moveCells'

export function addNewCell(
  cells: Cells,
  movedLayers: Set<number>,
  transformIndex: TransformationMethod,
  value?: number
) {
  const addNewCellLayerIndex = [...movedLayers][
    Math.floor(Math.random() * movedLayers.size)
  ]
  cells[transformIndex(addNewCellLayerIndex, 3)] =
    value ?? Math.random() >= 0.9 ? 4 : 2

  return true
}
