import { Box, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext } from '../themes/ThemeWrapper'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useAuth } from 'hooks/useAuth'
import { Fab } from './FloatingActionButton'

export function ThemeButton() {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const [{ user }] = useAuth()

  return (
    <Fab
      title={'Переключить тему'}
      onClick={() => colorMode.toggleColorMode(user?.id)}
      order={5}>
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </Fab>
  )
}
