import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MuiAppBar from '@mui/material/AppBar'
import { menuData } from './drawerBarData'
import { Button } from '@mui/material'
import backgroundImage from './icons/background.svg'

export const NavBar = () => {
  const AppBar = styled(MuiAppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
    height: 100,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }))

  return (
    <AppBar
      position="fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            fontSize: '2.375rem',
          }}>
          2048
        </Typography>
        {menuData.map(value => (
          <Button
            key={value.text}
            color="inherit"
            sx={{
              fontWeight: 'bold',
              fontSize: '0.975rem',
            }}>
            {value.text}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}
