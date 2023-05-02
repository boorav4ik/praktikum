import { type Cell } from '../../../game/utils/moveCells'

const EDGES = [
  [0, 1, 2, 3],
  [0, 4, 8, 12],
  [3, 7, 11, 15],
  [12, 13, 14, 15],
]

export function isAllCellsAtOneOfEdges(cells: Cell[]) {
  const significantСellIds = cells.reduce(
    (output, [value], id) => (value ? [...output, id] : output),
    [] as number[]
  )

  return EDGES.some(edge => significantСellIds.every(id => edge.includes(id)))
}
