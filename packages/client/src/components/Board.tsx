import Box from '@mui/material/Box'
import Typography, { type TypographyProps } from '@mui/material/Typography'
import { Canvas, type CanvasProps } from '../game/components/Canvas'
import { Cell } from '../game/utils/moveCells'

export type BoardProps = Omit<CanvasProps, 'cells'> & {
  cells: Cell[]
  header?: string
  footer?: string
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
          borderColor: props.borderColor,
        }}>
        <Canvas cells={props.cells} direction={props.direction} />
      </Box>
      <BoardTypography>{props.footer}</BoardTypography>
    </>
  )
}
