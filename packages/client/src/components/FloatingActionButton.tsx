import { useState, MouseEvent, type PropsWithChildren } from 'react'
import MuiFab from '@mui/material/Fab'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

type FabProps = PropsWithChildren<{
  title: string
  order?: number
  onClick: () => void
  active?: boolean
}>

export function Fab({ order = 0, title, active, ...props }: FabProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  return (
    <>
      <MuiFab
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        color={active ? 'secondary' : 'primary'}
        size="small"
        sx={{
          position: 'absolute',
          bottom: 16 + order * 64,
          right: 16,
          borderRadius: '20%',
        }}
        {...props}
      />
      <Popover
        sx={{
          pointerEvents: 'none',
          background: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        container={anchorEl}>
        <Typography sx={{ p: 1 }}>{title}</Typography>
      </Popover>
    </>
  )
}
