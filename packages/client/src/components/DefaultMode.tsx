import { type GameBordType, type GameBoardProps } from './GameBoard'
import { type Cell, Effect, EmptyCell } from '../game/utils/moveCells'
import { ArrowDirection } from '../game/utils/ArrowDirections'
import { transformations } from '../game/utils/Transformations'
import { moveCells } from '../game/utils/moveCells'
import { addNewCell } from '../game/utils/addNewCels'


export function DefaultMode(GameComponent: GameBordType) {
  return (props: Omit<GameBoardProps, 'initCells' | 'moveCells'>) => (
    <GameComponent
      {...props}
      initCells={() => {
        const cells: Cell[] = Array.from(Array(16), () => EmptyCell)

        for (let i = 0; i < 4; i++) {
          const index = Math.floor(Math.random() * 15)
          cells[index] = [2, Effect.appears]
        }

        return cells
      }}
      moveCells={(cells: Cell[], direction: ArrowDirection) => {
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
