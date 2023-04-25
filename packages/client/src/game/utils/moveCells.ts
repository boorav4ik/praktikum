import { type TransformationMethod } from './Transformations'

export enum Effect {
  Idle,
  Moving,
  Appears,
  Vanish,
  Shake,
}

//TODO: Add fixed length array type
export type Cell = [number, Effect]
export const EmptyCell: Cell = [0, Effect.Idle]

export function moveCells(cells: Cell[], transformIndex: TransformationMethod) {
  const output: Cell[] = []
  const movedLayers: Set<number> = new Set()
  for (let i = 0; i < 4; i++) {
    const layer = getLayer(cells, i, transformIndex)
    if (moveLayer(layer)) movedLayers.add(i)
    addLayer(output, layer, i, transformIndex)
  }
  return { cells: output, movedLayers }
}

function getLayer(
  cells: Cell[],
  layerIndex: number,
  transformIndex: TransformationMethod
) {
  const output: Cell[] = []
  for (let i = 0; i < 4; i++) {
    output.push([...cells[transformIndex(layerIndex, i)]])
  }
  return output
  // return [0, 1, 2, 3].map(i => cells[transformIndex(layerIndex, i)])
}

function moveLayer(layer: Cell[]): boolean {
  let isMerged = false
  let isMoved = false
  for (let i = 0; i < 4; i++) {
    const [value] = layer[i]
    if (!i) layer[i] = [value, Effect.Idle]
    else if (value) {
      const [nextCellValue] = layer[i - 1]
      if (!nextCellValue) {
        shiftCell(layer, i)
        isMoved = true
      } else if (!isMerged && value === nextCellValue) {
        jounCell(layer, i)
        isMerged = true
        isMoved = true
      } else {
        layer[i] = [value, Effect.Idle]
      }
    }
  }
  return isMoved
}

function shiftCell(layer: Cell[], index: number) {
  const [value] = layer[index]
  layer[index - 1] = [value, Effect.Moving]
  layer[index] = EmptyCell
}

function jounCell(layer: Cell[], index: number) {
  const [value] = layer[index]
  layer[index - 1] = [value * 2, Effect.Moving]
  layer[index] = EmptyCell
}

function addLayer(
  cells: Cell[],
  layer: Cell[],
  i: number,
  transformIndex: TransformationMethod
) {
  layer.forEach((value, j) => (cells[transformIndex(i, j)] = value))
}
