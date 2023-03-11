import MuiButton, { ButtonProps } from '@mui/material/Button'

export function Button(
  //https://github.com/mui/material-ui/issues/16846
  props: Omit<ButtonProps, 'component'> & { component?: any }
) {
  return (
    <MuiButton
      variant="contained"
      sx={{ fontWeight: 700, minWidth: 270 }}
      {...props}
    />
  )
}
