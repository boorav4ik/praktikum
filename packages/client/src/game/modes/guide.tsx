import { Cell, Effect, EmptyCell } from '../utils/moveCells'
import { ArrowDirection } from '../utils/ArrowDirections'
import { transformations } from '../utils/Transformations'
import { moveCells } from '../utils/moveCells'
import { addNewCell } from '../utils/addNewCels'
import { useArrow } from '../hooks/useArrow'
import { useEffect, useState } from 'react'
import { Board } from '../../components/Board'

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

const GUIDE_INIT = (() => {
  const cells = Array.from(Array(16), () => EmptyCell)
  cells[5] = [2, Effect.Appears]
  cells[10] = [2, Effect.Appears]
  return cells
})()
export function GuideMode({
  handleUdateCells,
  soundEffects,
  ...props
}: {
  cells?: Cell[]
  handleUdateCells: (cells: Cell[]) => void
  soundEffects: false | { shift: HTMLAudioElement; shake: HTMLAudioElement }
}) {
  const [guideStep, setGuideStep] = useState(0)
  const direction = useArrow(move)

  function move(direction: ArrowDirection) {
    if (!guideStep) return setGuideStep(1)
    const transform = transformations.getTransformation(direction)
    const { cells, movedLayers } = moveCells([...props.cells!], transform)
    if (!movedLayers.size) {
      soundEffects && soundEffects.shake.play()
      handleUdateCells(cells.map(([value]: Cell) => [value, Effect.Shake]))
    } else {
      addNewCell(cells, movedLayers, transform)
      soundEffects && soundEffects.shift.play()
      handleUdateCells(cells)
    }
    // switch (guideStep) {
    //   case 1:

    //     break;

    //   default:
    //     break;
    // }
  }

  useEffect(() => {
    switch (guideStep) {
      case 0:
        handleUdateCells(Array.from(Array(16), () => EmptyCell))
        break
      case 1:
        handleUdateCells(GUIDE_INIT)
    }
  }, [guideStep])

  return <Board {...props} direction={direction} {...GUIDE[guideStep]} />
}
