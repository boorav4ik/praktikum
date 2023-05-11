import MuiButton, { type ButtonProps } from '@mui/material/Button'

//https://github.com/mui/material-ui/issues/16846
type TButtonProps = Omit<ButtonProps, 'component'> & { component?: any }

export function Button(props: TButtonProps) {
  return (
    <MuiButton
      variant="contained"
      sx={{ fontWeight: 700, minWidth: 270 }}
      {...props}
    />
  )
}
