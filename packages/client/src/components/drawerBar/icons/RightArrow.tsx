import { SvgIcon, SvgIconProps } from '@mui/material'

const D = 'M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z'

export default function RightArrowIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 22 22">
      <path d={D} />
    </SvgIcon>
  )
}
