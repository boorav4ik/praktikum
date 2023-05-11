import { HTMLProps } from 'react'
import { Box, Grid, GridProps } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { Nullable } from 'utils/nullableType'

type NullableString = Nullable<string>

export type ForumRowProps = {
  gridProps?: GridProps
  btnProps?: ButtonProps
  spanProps?: HTMLProps<HTMLSpanElement>
  text: NullableString
  btnText: string
  btnDelText?: string
  icon?: () => JSX.Element
  onClick: () => void
  iconDelete?: () => JSX.Element
  deleteClick?: () => void
}

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#FFFFFF'),
  backgroundColor: '#7AB3A2',
  '&:hover': {
    backgroundColor: '#1E515D',
    textDecoration: 'underline',
  },
}))

export function ForumRow({
  gridProps,
  text,
  btnText,
  btnProps,
  spanProps,
  icon,
  onClick,
  iconDelete,
  deleteClick,
  btnDelText,
}: ForumRowProps) {
  return (
    <Grid
      item
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      {...gridProps}
      columnSpacing={2}>
      <Grid item xs={btnDelText ? 8 : 10}>
        <Box
          bgcolor="green.64"
          sx={{
            display: 'flex',
            borderRadius: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            px: 3,
            py: 1.5,
          }}>
          {text}
        </Box>
      </Grid>
      <Grid item xs={2}>
        <ColorButton
          onClick={onClick}
          variant="contained"
          disableElevation={true}
          sx={{
            color: 'white',
            fontSize: 16,
            border: '2px solid white',
            borderRadius: 1,
            alignItems: 'center',
            width: '100%',
            paddingX: 2,
          }}
          {...btnProps}>
          {icon && icon()}
          <span {...spanProps} style={icon ? { marginLeft: '5px' } : {}}>
            {btnText}
          </span>
        </ColorButton>
      </Grid>
      {btnDelText && (
        <Grid item xs={2}>
          <ColorButton
            onClick={deleteClick}
            variant="contained"
            disableElevation={true}
            sx={{
              color: 'white',
              fontSize: 16,
              border: '2px solid white',
              borderRadius: 1,
              alignItems: 'center',
              width: '100%',
              paddingX: 2,
            }}
            {...btnProps}>
            {iconDelete()}
            <span
              {...spanProps}
              style={iconDelete ? { marginLeft: '5px' } : {}}>
              {btnDelText}
            </span>
          </ColorButton>
        </Grid>
      )}
    </Grid>
  )
}
