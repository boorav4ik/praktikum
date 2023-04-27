import { Box, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext } from '../themes/ThemeWrapper'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'

export function ThemeButton() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        color: 'icon.default',
      }}>
      <IconButton
        title='Переключить тему'
        onClick={colorMode.toggleColorMode}
        color="inherit"
        sx={{
          position: 'relative',
          padding: '12px',
          maxWidth: '54px',
          minWidth: '54px',
        }}>
        {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}