import { FC } from 'react'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import LeftArrow from 'layouts/Main/icons/LeftArrow'
import RightArrow from 'layouts/Main/icons/RightArrow'

interface SideBarProps {
  open?: boolean
  toggleDrawer: () => void
}

export const DrawerHeader: FC<SideBarProps> = ({ open, toggleDrawer }) => {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }))

  return (
    <DrawerHeader sx={{ mt: 0, zIndex: 1 }}>
      <IconButton onClick={toggleDrawer}>
        {open ? <LeftArrow /> : <RightArrow />}
      </IconButton>
    </DrawerHeader>
  )
}
