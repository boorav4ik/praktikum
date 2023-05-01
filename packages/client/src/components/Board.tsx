import Box from '@mui/material/Box'
import Typography, { type TypographyProps } from '@mui/material/Typography'
import { Canvas, type CanvasProps } from '../game/components/Canvas'
import { Cell } from '../game/utils/moveCells'
// import { ArrowDirection } from '../game/utils/ArrowDirections'

export type BoardProps = Omit<CanvasProps, 'cells'> & {
  cells: Cell[]
  header?: string
  footer?: string
  // boardProps?: BoxProps
  borderColor?: string
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
  // const { sx: boardSX = {}, ...boardProps } = props.boardProps ?? {}

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
          border: '4px solid #1E515D',
          borderColor: props.borderColor
          // ...boardSX,
        }}
        // {...boardProps}
        >
        <Canvas
          cells={props.cells}
          direction={props.direction}
        />
      </Box>
      <BoardTypography>{props.footer}</BoardTypography>
    </>
  )
}
