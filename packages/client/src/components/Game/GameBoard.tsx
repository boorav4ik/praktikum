import { useEffect, useMemo, useState } from 'react'
import { Board } from '../Board'
import { GameMode } from './GameMode'
import { useArrow } from 'game/hooks/useArrow'
import {
  TransformationMethod,
  transformations,
} from 'game/utils/Transformations'
import { Cell, Effect, moveCells } from 'game/utils/moveCells'
import { ArrowDirection } from 'game/utils/ArrowDirections'
import { addNewCell } from 'game/utils/addNewCels'
import shiftSound from 'assets/audio/cards-scrape.mp3'
import shakeSound from 'assets/audio/silk-handling.mp3'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import * as GameUtils from './utils'
import { Button } from '../Button'
import { useAppDispatch } from '../../store/hooks'
import { useAuth } from '../../hooks/useAuth'
import { updateUserLeader } from '../../api/leader'

const SIZE = 16

const VIBRATION_PATTERN = [
  10, 3, 10, 3, 10, 20, 20, 3, 20, 3, 20, 20, 10, 3, 10, 3, 10,
]

type SoundEffects = false | { shift: HTMLAudioElement; shake: HTMLAudioElement }

export function GameBoard({
  mode,
  ...props
}: {
  mode: GameMode
  soundDisabled: boolean
  vibrationDisable: boolean
}) {
  const [{ userData }] = useAuth()
  const dispatch = useAppDispatch()
  const [cells, setCells] = useState<Cell[]>(() =>
    GameUtils.initEmptyCells(SIZE)
  )
  const [step, setStep] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)

  const soundEffects = useMemo<SoundEffects>(
    () =>
      !props.soundDisabled && {
        shift: new Audio(shiftSound),
        shake: new Audio(shakeSound),
      },
    [props.soundDisabled]
  )
  const direction = useArrow(shift)

  const isGuideMode = mode === GameMode.Guide

  const incStep = () => {
    setStep(step + 1)
  }

  const moveWithEffects = (
    previousState: Cell[],
    transform: TransformationMethod
  ) => {
    const { cells, movedLayers } = moveCells(previousState, transform)

    if (movedLayers.size) {
      soundEffects && soundEffects.shift.play()
    } else {
      soundEffects && soundEffects.shake.play()
      !props.vibrationDisable && navigator.vibrate(VIBRATION_PATTERN)
      for (let i = 0; i < cells.length; i++) {
        const [value] = cells[i]
        if (value) {
          cells[i] = [value, Effect.Shake]
        }
      }
    }

    return { cells, movedLayers }
  }

  function shift(direction: ArrowDirection) {
    const transform = transformations.getTransformation(direction)

    const switchStepGuide = (cells: Cell[], movedLayers: Set<number>) => {
      if (!movedLayers.size) return false
      switch (step) {
        case 2:
          return GameUtils.isAllCellsAtOneOfEdges(cells)
        case 3:
        case 10:
          return GameUtils.isOnlyOneSignificantCell(cells)
        case 8:
          return addNewCell(cells, movedLayers, transform, 4), true
        case 12:
          return addNewCell(cells, movedLayers, transform), true
        default:
          return true
      }
    }

    if (isGuideMode && step <= 12) {
      if (!step) {
        setStep(1)
        setCells(GameUtils.initGuideCells(SIZE))
      } else {
        const { cells: newCells, movedLayers } = moveWithEffects(
          [...cells],
          transform
        )

        if (switchStepGuide(newCells, movedLayers)) incStep()

        setCells(newCells)
      }
    } else {
      setCells(state => {
        const { cells, movedLayers } = moveWithEffects([...state], transform)
        if (!movedLayers.size) {
          return state.map(([value]) => [value, Effect.Shake])
        }
        return addNewCell(cells, movedLayers, transform)
      })
    }
  }

  const boardProps = () => {
    const output = (isGuideMode && GameUtils.GUIDE[step]) || {
      header: `Score: ${GameUtils.getScore(cells)}`,
    }
    return output
  }

  const resetGame = () => {
    setCells(GameUtils[isGuideMode ? 'initEmptyCells' : 'initCells'](SIZE))
    setStep(0)
    setIsGameOver(false)
  }

  function updateLeaderBoard(score: number) {
    dispatch(
      updateUserLeader({
        name: userData?.first_name,
        avatar: `https://ya-praktikum.tech/api/v2/resources/${userData?.avatar}`,
        score: score,
      })
    )
  }

  useEffect(() => {
    if ((!isGuideMode || step) && GameUtils.isMoveOver(cells)) {
      setIsGameOver(true)
      updateLeaderBoard(GameUtils.getScore(cells))
    }
  }, [...cells.map(([value]) => value)])

  useEffect(() => {
    if (isGuideMode) {
      setStep(0)
      setCells(GameUtils.initEmptyCells(SIZE))
    } else if (!cells.some(([value]) => value)) {
      setCells(GameUtils.initCells(SIZE))
    }
  }, [mode])

  return (
    <>
      <Board
        cells={cells}
        direction={direction}
        {...boardProps()}
        borderColor={
          isGuideMode && [2, 3, 9, 10].includes(step) ? 'tomato' : undefined
        }
      />
      <Dialog open={isGameOver} onClose={resetGame}>
        <DialogTitle>Закончились ходы</DialogTitle>
        <DialogContent>
          <DialogContentText>{`Набрано очков: ${GameUtils.getScore(
            cells
          )}!`}</DialogContentText>
          Поздравляем!!!
        </DialogContent>
        <DialogActions>
          <Button onClick={resetGame}>Сыграть ещё</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
