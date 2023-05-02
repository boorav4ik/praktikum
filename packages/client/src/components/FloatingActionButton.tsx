import { Fab as MuiFab, Tooltip } from '@mui/material'

type FabProps = {
  title: string
  order?: number
  onClick: () => void
  children: React.ReactNode
  active?: boolean
}

export function Fab({ order = 0, title, active, ...props }: FabProps) {
  return (
    <Tooltip title={title} placement='left' open={true}>
      <MuiFab
        sx={{
          position: 'absolute',
          bottom: 16 + order * 64,
          right: 16,
          borderRadius: '20%',
        }}
        color={active ? 'secondary' : 'primary'}
        {...props}
      />
    </Tooltip>
  )
}
