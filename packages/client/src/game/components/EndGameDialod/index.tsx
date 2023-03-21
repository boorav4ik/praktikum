import Dialog, { DialogProps } from '@mui/material/Dialog'
import { Button } from '../../../components/Button'
import { TextField } from '../../../components/TextFields'

export function EndGameDialog({
  onRestartClick,
  score,
  ...props
}: DialogProps & { onRestartClick: () => void; score: number }) {
  return (
    <Dialog {...props}>
      <TextField>{score}</TextField>
      <Button onClick={onRestartClick}>Ещё?</Button>
    </Dialog>
  )
}
