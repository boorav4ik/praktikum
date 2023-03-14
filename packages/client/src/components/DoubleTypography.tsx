import Typography, { TypographyProps } from '@mui/material/Typography'
import { SxProps } from '@mui/system'

type TypographyPropsWithContent = TypographyProps & { content: string }

export function DoubleTypography({
  first: { content: first, ...firstProps },
  second: { content: second, ...secondProps },
  sx,
}: {
  first: TypographyPropsWithContent
  second: TypographyPropsWithContent
  sx: SxProps
}) {
  return (
    <>
      <Typography
        component="span"
        sx={{ fontWeight: 700, fontSize: 32, display: 'contents', ...sx }}
        color="green.64"
        {...firstProps}>
        {first}
      </Typography>
      <Typography
        component="span"
        sx={{ fontWeight: 700, fontSize: 32, display: 'contents', ...sx }}
        {...secondProps}>
        {second}
      </Typography>
    </>
  )
}
