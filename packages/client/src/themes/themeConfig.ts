import { ThemeOptions } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { PaletteMode } from '@mui/material'

export const ThemeMode = {
  light: 'light',
  dark: 'dark',
}

export const ThemeConfig = (mode: PaletteMode) =>
  ({
    typography: {
      fontFamily: 'Raleway',
      button: {
        textTransform: 'none',
      },
    },
    palette: {
      mode,
      ...(mode === ThemeMode.light
        ? {
            text: {
              primary: '#FFFFFF',
            },
            green: {
              [64]: '#1E515D',
              dark: '#7AB3A2',
            },
            icon: {
              default: '#1E515D',
            },
            background: {
              default: '#C1EEE1',
              paper: '#92CCBB',
              btn: '#7AB3A2',
            },
            primary: {
              main: '#def0eb',
              contrastText: '#1E515D',
            },
            secondary: {
              main: '#1E515D',
            },
            error: {
              main: red[400],
              height: 20,
            },
          }
        : {
            text: {
              primary: '#FFFFFF',
            },
            green: {
              [64]: '#1E515D',
              dark: '#7AB3A2',
            },
            icon: {
              default: '#FFFFFF',
            },
            background: {
              default: '#1E515D',
              paper: '#92CCBB',
              btn: '#7AB3A2',
            },
            primary: {
              main: '#def0eb',
              contrastText: '#1E515D',
            },
            secondary: {
              main: '#1E515D',
            },
            error: {
              main: red[400],
              height: 20,
            },
          }),
    },
    components: {
      MuiTypography: {
        defaultProps: {
          fontWeight: '800',
          fontSize: '0.975rem',
          color: mode === ThemeMode.light ? '#1E515D' : '#FFFFFF',
        },
      },
    },
  } as ThemeOptions)
