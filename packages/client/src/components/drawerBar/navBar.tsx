import { FC } from 'react'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MenuIcon from './icons/Menu'
import { drawerWidth, menuData } from './drawerBarData'
import IconButton from '@mui/material/IconButton'
import { Button } from '@mui/material'
import Image from './icons/appbar.png'

interface NavBarProps {
  open?: boolean
  handleDrawerOpen: () => void
}

export const NavBar: FC<NavBarProps> = ({ open, handleDrawerOpen }) => {
  interface AppBarProps extends MuiAppBarProps {
    open?: boolean
  }
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: prop => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }))

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          2048
        </Typography>
        {menuData.map(value => (
          <Button key={value.text} color="inherit">
            {value.text}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}
