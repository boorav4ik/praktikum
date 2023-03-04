import { SvgIcon, SvgIconProps } from '@mui/material'

const D = 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'

export default function MenuIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 22 22">
      <path d={D} />
    </SvgIcon>
  )
}
