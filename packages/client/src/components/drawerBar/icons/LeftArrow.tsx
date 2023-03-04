import { SvgIcon, SvgIconProps } from '@mui/material'

const D = 'M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z'

export default function LeftArrow(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 22 22">
      <path d={D} />
    </SvgIcon>
  )
}
