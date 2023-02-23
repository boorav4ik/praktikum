import { ThemeOptions, createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'

export const theme = createTheme({
  typography: {
    fontFamily: 'Raleway',
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    text: {
      primary: '#FFFFFF',
    },
    green: {
      [64]: '#1E515D',
    },
    background: {
      default: '#C1EEE1',
      paper: '#92CCBB',
    },
    primary: {
      main: '#def0eb',
      contrastText: '#1E515D',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: green.A400,
    },
  },
} as ThemeOptions)
