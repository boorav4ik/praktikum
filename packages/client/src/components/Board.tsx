import Box, { type BoxProps } from '@mui/material/Box'
import Typography, { type TypographyProps } from '@mui/material/Typography'
import { Canvas, type CanvasProps } from '../game/components/Canvas'

interface BoardProps extends CanvasProps {
  header?: string
  footer?: string
  boardProps?: BoxProps
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
  const { sx: boardSX = {}, ...boardProps } = props.boardProps ?? {}
  return (
    <>
      <BoardTypography>{props.header}</BoardTypography>
      <Box
        bgcolor="background.paper"
        sx={{
          height: 520,
          width: 520,
          borderRadius: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...boardSX,
        }}
        {...boardProps}>
        <Canvas cells={props.cells} direction={props.direction} />
      </Box>
      <BoardTypography>{props.footer}</BoardTypography>
    </>
  )
}
