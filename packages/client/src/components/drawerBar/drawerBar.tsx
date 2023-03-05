import { FC, ReactNode, useState } from 'react'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import { NavBar } from './navBar'
import { SideBar } from './sideBar'
import { drawerWidth } from './drawerBarData'
import { DrawerHeader } from './drawerHeader'
interface DrawerBarProps {
  children?: ReactNode
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export const DrawerBar: FC<DrawerBarProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false)

  const toogleDrawer = () => {
    setOpen(prev => !prev)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader open={open} toogleDrawer={toogleDrawer} />
        <Divider />
        <SideBar open={open} />
      </Drawer>
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {children}
      </Box>
    </Box>
  )
}
