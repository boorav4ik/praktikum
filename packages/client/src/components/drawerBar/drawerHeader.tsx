import { FC } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import LeftArrow from './icons/LeftArrow'
import RightArrow from './icons/RightArrow'

interface SideBarProps {
  handleDrawerClose: () => void
}

export const DrawerHeader: FC<SideBarProps> = ({ handleDrawerClose }) => {
  const theme = useTheme()

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }))

  return (
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <RightArrow /> : <LeftArrow />}
      </IconButton>
    </DrawerHeader>
  )
}
