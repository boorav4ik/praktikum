import Typography, { TypographyProps } from '@mui/material/Typography'
import { Grid, GridProps, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { SxProps } from '@mui/system'

export type HeaderForPageProps = {
  gridProps?: GridProps
  typographyProps?: TypographyProps
  text: string
  backPath?: string
  state?: Record<string, unknown>
  sx?: SxProps
}

function HeaderForPage({
  gridProps,
  typographyProps,
  text,
  backPath,
  state,
  sx,
}: HeaderForPageProps) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      {...gridProps}>
      <Grid item xs={8}>
        <Typography
          component="span"
          sx={{
            fontWeight: 700,
            fontSize: 36,
            display: 'flex',
            justifyContent: 'center',
            ...sx,
          }}
          color="green.64"
          {...typographyProps}>
          {text}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Link
          component={RouterLink}
          color="green.64"
          sx={{ fontWeight: 700, fontSize: 20 }}
          underline="hover"
          to={backPath || '/'}
          state={state}>
          Назад
        </Link>
      </Grid>
    </Grid>
  )
}
export { HeaderForPage }
