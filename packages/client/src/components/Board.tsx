import Box, { type BoxProps } from '@mui/material/Box'
import Typography, { type TypographyProps } from '@mui/material/Typography'
import { Canvas, type CanvasProps } from '../game/components/Canvas'
import { Cell, EmptyCell } from '../game/utils/moveCells'
// import { ArrowDirection } from '../game/utils/ArrowDirections'

export type BoardProps = Omit<CanvasProps, 'cells'> & {
  cells: Cell[]
  header?: string
  footer?: string
  boardProps?: BoxProps
  // handleMove: (cells: Cell[], direction: ArrowDirection) => Cell[] | undefined
  // handleInit: () => Cell[]
}

function BoardTypography(props: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        minHeight: 40,
        fontSize: 24,
      }}
    />
  )
}

export function Board(props: BoardProps) {
  console.log(props);

  const { sx: boardSX = {}, ...boardProps } = props.boardProps ?? {}
  return (
    <>
      <BoardTypography>{props.header}</BoardTypography>
      <Box
        bgcolor="background.paper"
        sx={{
          height: 500,
          width: 500,
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          ...boardSX,
        }}
        {...boardProps}>
        <Canvas
          cells={props.cells ?? Array.from(Array(16), () => EmptyCell)}
          direction={props.direction}
        />
      </Box>
      <BoardTypography>{props.footer}</BoardTypography>
    </>
  )
}
