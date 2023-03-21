import { TransformationMethod } from './Transformations'

//TODO: Add fixed length array type
export type Cells = number[]
type Layer = number[]

export function moveCells(cells: Cells, transformIndex: TransformationMethod) {
  const output: number[] = []
  const movedLayers: Set<number> = new Set()
  for (let i = 0; i < 4; i++) {
    const layer = getLayer(cells, i, transformIndex)
    if (moveLayer(layer)) movedLayers.add(i)
    addLayer(output, layer, i, transformIndex)
  }
  return { output, movedLayers }
}

function getLayer(
  cells: Cells,
  layerIndex: number,
  transformIndex: TransformationMethod
) {
  return [0, 1, 2, 3].map(i => cells[transformIndex(layerIndex, i)])
}
function moveLayer(layer: Layer): boolean {
  let isMerged = false
  let isMoved = false
  for (let j = 1; j < 4; j++) {
    if (layer[j]) {
      if (!layer[j - 1]) {
        shiftCell(layer, j)
        isMoved = true
      } else if (!isMerged && layer[j - 1] === layer[j]) {
        jounCell(layer, j)
        isMerged = true
        isMoved = true
      }
    }
  }
  return isMoved
}

function shiftCell(layer: Layer, index: number) {
  layer[index - 1] = layer[index]
  layer[index] = 0
}

function jounCell(layer: Layer, index: number) {
  layer[index - 1] *= 2
  layer[index] = 0
}

function addLayer(
  cells: Cells,
  layer: Layer,
  i: number,
  transformIndex: TransformationMethod
) {
  layer.forEach((value, j) => (cells[transformIndex(i, j)] = value))
}
