import { useState } from 'react'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import { Box, Divider, Drawer as MuiDrawer } from '@mui/material'
import { NavBar } from './navBar'
import { SideBar } from './sideBar'
import { drawerWidth } from './drawerBarData'
import { DrawerHeader } from './drawerHeader'
import { Outlet } from 'react-router-dom'

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
  position: 'absolute',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export const MainLayout = () => {
  const [open, setOpen] = useState<boolean>(false)
  const toggleDrawer = () => {
    setOpen(prev => !prev)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Drawer
        sx={{ display: { xs: 'flex', md: 'none' } }}
        variant="permanent"
        open={open}>
        <DrawerHeader open={open} toggleDrawer={toggleDrawer} />
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
          marginLeft: { xs: '64px', md: '0' },
        }}>
        <Outlet />
      </Box>
    </Box>
  )
}
