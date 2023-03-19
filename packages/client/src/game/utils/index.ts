import { Cell } from '../core/Cell'
import { PALETTE } from '../consts'

function turnColor(value: number) {
  return PALETTE[String(value)]
}

function mergeLeft(row: number[]) {
  const len = row.length
  const result = new Array(len).fill(0)
  let index = 0
  for (let i = 0; i < len; i++) {
    if (result[index] && row[i] === result[index]) {
      result[index] += row[i]
      index++
      continue
    }
    if (result[index] && row[i] && row[i] !== result[index]) {
      index++
      result[index] = row[i]
      continue
    }
    if (row[i]) {
      result[index] = row[i]
    }
  }
  return result
}

function mergeRight(row: number[]) {
  const len = row.length
  const result = new Array(len).fill(0)
  let index = len - 1
  for (let i = len - 1; i >= 0; i--) {
    if (result[index] && row[i] === result[index]) {
      result[index] += row[i]
      index--
      continue
    }
    if (result[index] && row[i] && row[i] !== result[index]) {
      index--
      result[index] = row[i]
      continue
    }
    if (row[i]) {
      result[index] = row[i]
    }
  }
  return result
}

function deepCopy(state: [] | object) {
  return JSON.parse(JSON.stringify(state))
}

function copyCellsValue(row: Cell[]) {
  const len = row.length
  const result = []
  for (let i = 0; i < len; i++) {
    result.push(row[i].value)
  }
  return result
}

function insertRowValues(row: Cell[], values: number[]) {
  const len = row.length
  for (let i = 0; i < len; i++) {
    row[i].value = values[i]
  }
  return row
}

function isFullfied(cells: Cell[][]) {
  if (!cells.length) return false
  let fullfied = false
  const len = cells[0].length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (cells[i][j].value === 0) {
        fullfied = false
        return fullfied
      } else {
        fullfied = true
      }
    }
  }
  return fullfied
}

function isEqualCells(prev: Cell[][], current: Cell[][]) {
  return JSON.stringify(prev) === JSON.stringify(current)
}

function insertColumnValues(columns: Cell[][], values: number[][]) {
  const len = columns[0].length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      columns[j][i].value = values[i][j]
    }
  }
  return columns
}

function checkRows(cells: Cell[][]) {
  const len = cells[0].length
  let isNext = false
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (cells[i][j + 1]) {
        if (cells[i][j].value === cells[i][j + 1].value) {
          isNext = true
          return isNext
        } else {
          isNext = false
        }
      }
    }
  }
  return isNext
}

function checkColumns(cells: Cell[][]) {
  const len = cells[0].length
  let isNext = true
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (cells[j][i + 1]) {
        if (cells[j][i].value === cells[j][i + 1].value) {
          isNext = true
          return isNext
        } else {
          isNext = false
        }
      }
    }
  }
  return isNext
}

export {
  turnColor,
  mergeLeft,
  deepCopy,
  copyCellsValue,
  insertRowValues,
  mergeRight,
  isFullfied,
  isEqualCells,
  insertColumnValues,
  checkRows,
  checkColumns
}
