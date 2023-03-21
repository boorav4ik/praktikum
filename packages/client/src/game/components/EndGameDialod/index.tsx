import Dialog, { DialogProps } from '@mui/material/Dialog'
import { Button } from '../../../components/Button'

export function EndGameDialog({
  onRestartClick,
  ...props
}: DialogProps & { onRestartClick: () => void }) {
  return (
    <Dialog {...props}>
      <Button onClick={onRestartClick}>Ещё?</Button>
    </Dialog>
  )
}
