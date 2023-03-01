import { SvgIcon, SvgIconProps } from '@mui/material'

const D = 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'

export default function Main(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 22 22">
      <path d={D} />
    </SvgIcon>
  )
}
