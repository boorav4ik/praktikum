import { useMemo, useState } from 'react'
import { Cell } from '../game/utils/moveCells'

import shiftSound from '../assets/audio/cards-scrape.mp3'
import shakeSound from '../assets/audio/silk-handling.mp3'
import { DefaultMode } from '../game/modes/default'
import { GuideMode } from '../game/modes/guide'
export enum GameMode {
  Guide = 1,
}

type GameProps = {
  soundDisabled: boolean
  vibrationDisable: boolean

  mode?: GameMode
}

function GameModeSwitch(mode?: GameMode) {
  switch (mode) {
    case GameMode.Guide:
      return GuideMode
    default:
      return DefaultMode
  }
}

export function Game({ mode, ...rest }: GameProps) {
  const [cells, setCells] = useState<Cell[]>()
  const soundEffects = useMemo(
    () =>
      !rest.soundDisabled && {
        shift: new Audio(shiftSound),
        shake: new Audio(shakeSound),
      },
    [rest.soundDisabled]
  )

  function handleUdateCells(cells: Cell[]) {
    setCells(cells)
  }

  return GameModeSwitch(mode)({
    handleUdateCells,
    cells,
    soundEffects,
  })
}
