import { FC } from 'react'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import LeftArrow from './icons/LeftArrow'
import RightArrow from './icons/RightArrow'

interface SideBarProps {
  open?: boolean
  toogleDrawer: () => void
}

export const DrawerHeader: FC<SideBarProps> = ({ open, toogleDrawer }) => {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }))

  return (
    <DrawerHeader sx={{ mt: 12, zIndex: 1 }}>
      <IconButton onClick={toogleDrawer}>
        {open ? <LeftArrow /> : <RightArrow />}
      </IconButton>
    </DrawerHeader>
  )
}
