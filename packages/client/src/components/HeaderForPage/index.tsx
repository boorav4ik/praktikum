import Typography, { TypographyProps } from '@mui/material/Typography'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './styles.sass'
type TypographyPropsWithContent = TypographyProps & { text: string, backPath?: string }
type Props = TypographyPropsWithContent

const HeaderForPage: FC<Props> = (props) => {
  return (
    <>
      <Typography
        component='span'
        sx={{ fontWeight: 700, fontSize: 36, display: 'flex', flexBasis: '90%' }}
        color='green.64'
      >
        {props.text}
      </Typography>
      <NavLink to={ props.backPath ?? '/' }>Назад</NavLink>
    </>
  )
}
export { HeaderForPage }