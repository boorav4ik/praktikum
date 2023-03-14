import { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MuiAppBar from '@mui/material/AppBar'
import { menuData } from './drawerBarData'
import { Button } from '@mui/material'
import backgroundImage from './icons/background.svg'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

function NavItem({ text, ...rest }: { text: string; to: string }) {
  return (
    <Button
      color="inherit"
      component={Link}
      sx={{
        fontWeight: 'bold',
        fontSize: '0.975rem',
      }}
      {...rest}>
      {text}
    </Button>
  )
}
const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.default,
  height: 100,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}))

export function NavBar() {
  const [{ user }, { getUser, signout }] = useAuth()

  useEffect(() => {
    if (!user) getUser()
  }, [])

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
          <NavItem key={value.text} {...value} />
        ))}
        <Button
          sx={{
            fontWeight: 'bold',
            fontSize: '0.975rem',
          }}
          onClick={() => user && signout()}
          component={Link}
          to="/login">
          {user ? 'Выйти' : 'Войти'}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
