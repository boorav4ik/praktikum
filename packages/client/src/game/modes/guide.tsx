import { Cell, Effect, EmptyCell } from '../utils/moveCells'

import { DefaultMode } from './default'

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

class GuideMode extends DefaultMode {
  private _step = 0

  // get step() {
  //   return this._step
  // }

  incStep() {
    this._step += 1
  }

  reset() {
    this._step = 0
  }

  init() {
    return Array.from(Array(16), () => EmptyCell)
  }

  getLegend(cells: Cell[], step: number) {
    return GUIDE[step]
  }
}

export const guideMode = new GuideMode()
