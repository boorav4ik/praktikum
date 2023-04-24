import { DefaultMode } from './DefaultMode'
import { GuideMode } from './GuideMode'
import { type GameBordType, type GameBoardProps } from './GameBoard'

export enum GameMode {
  Guide,
}

export function GameModeSwitch(mode?: GameMode) {
  switch (mode) {
    case GameMode.Guide:
      return GuideMode
    default:
      return DefaultMode
  }
}

export function GameModeWrapper(GameBordComponent: GameBordType) {
  return ({
    mode,
    ...props
  }: Omit<GameBoardProps, 'initCells' | 'moveCells'> & { mode?: GameMode }) =>
    GameModeSwitch(mode)(GameBordComponent)(props)
}
