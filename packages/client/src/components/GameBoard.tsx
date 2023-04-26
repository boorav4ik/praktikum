import { useEffect, useMemo, useState } from 'react'
import { Cell, Effect } from '../game/utils/moveCells'
// import { CellsAnimMethod } from '../game/modes/types'
import shiftSound from '../assets/audio/cards-scrape.mp3'
import shakeSound from '../assets/audio/silk-handling.mp3'
import { defaultMode } from '../game/modes/default'
import { ArrowDirection } from '../game/utils/ArrowDirections'
// import { transformations } from '../game/utils/Transformations'
// import { addNewCell } from '../game/utils/addNewCels'
import { useArrow } from '../game/hooks/useArrow'
import { Board, BoardProps } from './Board'
import { guideMode } from '../game/modes/guide'
// import { Dialog, DialogTitle } from '@mui/material'
// import { Board } from './Board'
// import { GuideMode } from '../game/modes/guide'

export enum GameMode {
  Default,
  Guide,
}

// type GameProps = {
//   soundDisabled: boolean
//   vibrationDisable: boolean

//   mode?: GameMode
// }

// function GameModeSwitch(mode?: GameMode) {
//   switch (mode) {
//     // case GameMode.Guide:
//     //   return GuideMode
//     default:
//       return DefaultMode
//   }
// }

// export function Game({ mode, ...rest }: GameProps) {
//   const [cells, setCells] = useState<Cell[]>()
//   const soundEffects = useMemo(
//     () =>
//       !rest.soundDisabled && {
//         shift: new Audio(shiftSound),
//         shake: new Audio(shakeSound),
//       },
//     [rest.soundDisabled]
//   )

//   // function handleUdateCells(cells: Cell[]) {
//   //   setCells(cells)
//   // }

//   const handleShift: CellsAnimMethod = cells => {
//     soundEffects && soundEffects.shift.play()
//     setCells(cells)
//   }

//   const handleShake: CellsAnimMethod = cells => {
//     soundEffects && soundEffects.shake.play()
//     setCells(cells)
//   }

//   return GameModeSwitch(mode)({
//     handleShift,
//     handleShake,
//     cells,
//     soundEffects,
//   })
// }

type GameBoardProps = BoardProps & GameProps & {
  // cells: Cell[]
  setCells: React.Dispatch<React.SetStateAction<Cell[]>>
}

// type GameHandls = {
//   handleMove: (
//     previousCells: Cell[],
//     direction: ArrowDirection
//   ) => Cell[] | null
//   handleInit: () => Cell[]
// }

function GameBoard({
  soundDisabled,
  cells,
  setCells,
  move,
  ...props
}: GameBoardProps & {
  move: (previousCells: Cell[], direction: ArrowDirection) => Cell[] | null
}) {
  // const [cells, setCells] = useState<Cell[]>(handleInit)

  const soundEffects = useMemo(
    () =>
      !soundDisabled && {
        shift: new Audio(shiftSound),
        shake: new Audio(shakeSound),
      },
    [soundDisabled]
  )

  const direction = useArrow(direction => {
    const newCells = move(cells, direction)
    if (newCells === null) {
      soundEffects && soundEffects.shake.play()
      return setCells(cells.map(([value]) => [value, Effect.Shake]))
    }
    soundEffects && soundEffects.shift.play()
    setCells(newCells)
  })

  // useEffect(() => {
  //   if (!cells) setCells(handleInit)
  // }, [])
  return <Board cells={cells} direction={direction} {...props} />
}

// function DefaultGameMode(Component: typeof GameBoard) {
//   function handleMove(previousCells: Cell[], direction: ArrowDirection) {
//     const transform = transformations.getTransformation(direction)
//     const { cells, movedLayers } = moveCells([...previousCells], transform)
//     if (!movedLayers.size) return null
//     addNewCell(cells, movedLayers, transform)
//     return cells
//   }

//   function handleInit() {
//     const cells = Array.from(Array(16), () => EmptyCell)
//     for (let i = 0; i < 4; i++) {
//       cells[Math.floor(Math.random() * 15)] = [2, Effect.Appears]
//     }
//     return cells
//   }

//   return (props: GameBoardProps) => (
//     <Component handleMove={handleMove} handleInit={handleInit} {...props} />
//   )
// }

// function GuideGameMode(Component: typeof GameBoard) {
//   function handleMove(previousCells: Cell[], direction: ArrowDirection) {
//     console.log({ direction })
//     const transform = transformations.getTransformation(direction)
//     const { cells, movedLayers } = moveCells([...previousCells], transform)
//     if (!movedLayers.size) return null
//     addNewCell(cells, movedLayers, transform)

//     return cells
//   }

//   function handleInit() {
//     const cells = Array.from(Array(16), () => EmptyCell)
//     return cells
//   }

//   return (props: GameBoardProps) => (
//     <Component handleMove={handleMove} handleInit={handleInit} {...props} />
//   )
// }

// function ModeSwitch(mode: GameMode) {
//   switch (mode) {
//     case GameMode.Guide:
//       return GuideGameMode
//     default:
//       return DefaultGameMode
//   }
// }

type GameProps = {
  soundDisabled: boolean
  vibrationDisable: boolean
}

// class DefaultMode {
//   initCells() {
//     const cells = Array.from(Array(16), () => EmptyCell)
//     for (let i = 0; i < 4; i++) {
//       cells[Math.floor(Math.random() * 15)] = [2, Effect.Appears]
//     }
//     return cells
//   }

//   moveCells(previousCells: Cell[], direction: ArrowDirection) {
//     const transform = transformations.getTransformation(direction)
//     const { cells, movedLayers } = moveCells([...previousCells], transform)
//     if (!movedLayers.size) return null
//     addNewCell(cells, movedLayers, transform)
//     return cells
//   }
// }

// class GuideMode extends DefaultMode {
//   initCells() {
//     return Array.from(Array(16), () => EmptyCell)
//   }
// }

// const guideMode = new GuideMode()

function getMode(mode: GameMode) {
  switch (mode) {
    case GameMode.Guide:
      return guideMode
    default:
      return defaultMode
  }
}

export const Game = ({ mode, ...props }: GameProps & { mode: GameMode }) => {
  const gameMode = getMode(mode)

  const [cells, setCells] = useState<Cell[]>(gameMode.init)
  const [step, setStep] = useState(0)

  const legend = gameMode.getLegend(cells, step)

  useEffect(() => {
    if (mode === GameMode.Default) {
      if (!cells.some(([value]) => value)) setCells(gameMode.init)
    } else if (mode === GameMode.Guide) {
      if (cells.some(([value]) => value)) setCells(gameMode.init)
      setStep(0)
    }
  }, [mode])

  return (
    <GameBoard
      {...props}
      cells={cells}
      setCells={setCells}
      move={gameMode.move}
      {...legend}
    />
  )
}
