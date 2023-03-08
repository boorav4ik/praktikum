import { FC, HTMLProps } from 'react'
import { Box, Grid, GridProps } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'

type Props = {
  gridProps?: GridProps,
  btnProps?: ButtonProps,
  spanProps?: HTMLProps<HTMLSpanElement>,
  text: string,
  btnText: string,
  icon?: () => JSX.Element,
  // iconProps?: SvgIconUserProp,
  onClick: () => void
}
export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#FFFFFF'),
  backgroundColor: '#7AB3A2',
  '&:hover': {
    backgroundColor: '#1E515D',
    textDecoration: 'underline'
  }
}))
export const ForumRow: FC<Props> = (
  {
    gridProps,
    text,
    btnText,
    btnProps,
    spanProps,
    icon,
    onClick
  }) => {
  return (
    <Grid
      item
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      {...gridProps}
      columnSpacing={2}
    >

      <Grid item xs={9}>
        <Box
          bgcolor='green.64'
          sx={
            {
              display: 'flex',
              borderRadius: 1,
              flexDirection: 'column',
              alignItems: 'flex-start',
              // justifyContent: 'flex-start',
              width: '100%',
              px: 3,
              py: 1.5
            }
          }>
          {text}
        </Box>
      </Grid>
      <Grid item xs={3}>
        <ColorButton
          onClick={onClick}
          variant='contained'
          disableElevation={true}
          sx={
            {
              color: 'white',
              fontSize: 20,
              border: '2px solid white',
              borderRadius: 1,
              alignItems: 'center',
              width: '100%',
              paddingX: 2,
            }
          }
          {...btnProps}
        >
          {icon && icon()}
          <span {...spanProps} style={
            icon ? {marginLeft: "5px"} : {}}
          >{btnText}</span>
        </ColorButton>
      </Grid>
    </Grid>
  )
}