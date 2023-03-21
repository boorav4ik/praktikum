import { useState } from 'react'
import { ArrowDirection } from '../utils/ArrowDirections'
import {
  transformations,
  TransformationMethod,
} from '../utils/getIndexTransformation'

//TODO: Add fixed length array type
type Cells = number[]
type Layer = number[]

function initCells(): Cells {
  const state: Cells = Array(16)

  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * 15)
    state[index] = 2
  }

  return state
}

function shiftCell(layer: Layer, index: number) {
  layer[index - 1] = layer[index]
  layer[index] = 0
}

function jounCell(layer: Layer, index: number) {
  layer[index - 1] *= 2
  layer[index] = 0
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

function getLayer(
  cells: Cells,
  layerIndex: number,
  transformIndex: TransformationMethod
) {
  return [0, 1, 2, 3].map(i => cells[transformIndex(layerIndex, i)])
}

function addLayer(
  cells: Cells,
  layer: Layer,
  i: number,
  transformIndex: TransformationMethod
) {
  layer.forEach((value, j) => (cells[transformIndex(i, j)] = value))
}

function addNewCell(
  cells: Cells,
  movedLayers: Set<number>,
  transformIndex: TransformationMethod
) {
  const addNewCellLayerIndex = [...movedLayers][
    Math.floor(Math.random() * movedLayers.size)
  ]
  cells[transformIndex(addNewCellLayerIndex, 3)] = 2
  return true
}

function checkGameIsOver(cells: Cells) {
  return !cells.some(value => !value)
}

function moveCells(cells: Cells, transformIndex: TransformationMethod) {
  const output: number[] = []
  const movedLayers: Set<number> = new Set()
  for (let i = 0; i < 4; i++) {
    const layer = getLayer(cells, i, transformIndex)
    if (moveLayer(layer)) movedLayers.add(i)
    addLayer(output, layer, i, transformIndex)
  }
  return { output, movedLayers }
}

type UseCells = [
  number[],
  boolean,
  (direction: ArrowDirection) => void,
  () => void
]

export function useCells(): UseCells {
  const [cells, setCells] = useState(initCells)
  const [isGameOver, setIsGameOver] = useState(false)

  function move(direction: ArrowDirection) {
    const transformIndex = transformations.getTransformation(direction)

    const { output, movedLayers } = moveCells(cells, transformIndex)

    if (!movedLayers.size) return setIsGameOver(checkGameIsOver(cells))

    addNewCell(output, movedLayers, transformIndex)
    setCells(output)
  }

  function restart() {
    setCells(initCells)
    setIsGameOver(false)
  }

  return [cells, isGameOver, move, restart]
}
