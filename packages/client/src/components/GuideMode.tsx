import { useState } from 'react'
import { type GameBoardProps, type GameBordType } from './GameBoard'
import { Cell, Effect, EmptyCell } from '../game/utils/moveCells'
import { ArrowDirection } from '../game/utils/ArrowDirections'
import { transformations } from '../game/utils/Transformations'
import { moveCells } from '../game/utils/moveCells'
import { addNewCell } from '../game/utils/addNewCels'

const BORDERS = [
  [0, 1, 2, 3],
  [0, 4, 8, 12],
  [3, 7, 11, 15],
  [12, 13, 14, 15],
]

const GUIDE: { header?: string; footer?: string }[] = [
  { header: '2048', footer: 'Используй стрелки на клавиатуре, чтобы начать' },
  { header: 'Знакомьтесь', footer: 'Для продолжения используй стрелки' },
  { header: 'Передвигай числа', footer: 'Прижми йх к стене' },
  { header: 'Объедини числа', footer: 'Используй стену' },
  { header: 'Так держать!!!' },
  { header: 'Сейчас появятся новые числа', footer: 'Используй стрелки' },
  { header: 'Уже почти', footer: 'Ещё чуть-чуть' },
  {
    header: 'Загрузка модуля MATH....',
    footer: 'Тебе говорили, что ты настойчивый',
  },
  {
    header: 'Проверка простых чисел на простоту...',
    footer: 'Используй стрелки',
  },
  { header: '2 + 2 = 4', footer: '4 + 4 = 8' },
  { header: 'Передвигайте числа', footer: '4 + 4 = 8' },
  { header: 'У тебя отлично получается' },
  { header: 'Продолжай', footer: 'чтоб получить 2048' },
]

export function GuideMode(GameComponent: GameBordType) {
  const [step, setStep] = useState(0)
  return (props: Omit<GameBoardProps, 'initCells' | 'moveCells'>) => (
    <GameComponent
      {...props}
      initCells={() => {
        const cells = Array.from(Array(16), () => EmptyCell)
        cells[5] = [2, Effect.appears]
        cells[8] = [2, Effect.appears]
      return cells     }}
      moveCells={(cells: Cell[],direction: ArrowDirection) => {
        const transform = transformations.getTransformation(direction)
        const { cells: newCells, movedLayers } = moveCells(
          [...cells],
          transform
        )
        if (!movedLayers.size) return //nothing changed

        addNewCell(newCells, movedLayers, transform)
        return newCells
      }}
    />
  )
}
