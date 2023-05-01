import { SvgIcon, SvgIconProps } from '@mui/material'

const d =
  'M341.333,77.576V0H170.667v77.576H23.273v46.545h38.788V512h387.879V124.121h38.788V77.576H341.333z M217.212,46.545 h77.576v31.03h-77.576V46.545z M403.394,465.455H108.606V124.121h294.788V465.455z'
export type SvgIconUserProp = SvgIconProps & { customColor?: string }

export default function GarbageIcon(props?: SvgIconUserProp) {
  return (
    <SvgIcon {...props}>
      <path d={d} fill={props?.customColor ?? 'white'} />
    </SvgIcon>
  )
}
