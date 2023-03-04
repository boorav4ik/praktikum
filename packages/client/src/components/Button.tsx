import Button, { ButtonProps } from '@mui/material/Button'

function Btn(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{ fontWeight: 700, minWidth: 270 }}
      {...props}
    />
  )
}

export { Btn as Button }
