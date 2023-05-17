import { createContext, useMemo, useState } from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { ThemeConfig } from './themeConfig'
import App from '../App'
const defaultTheme = localStorage.getItem('theme') as 'light' | 'dark' ?? 'light'
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = createContext({ toggleColorMode: () => {} });
export default function ToggleColorMode() {
  const [mode, setMode] = useState<'light' | 'dark'>(defaultTheme);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const theme  = prevMode === 'light' ? 'dark' : 'light'
          localStorage.setItem('theme', theme)
          return theme
        });
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme(ThemeConfig(mode)),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
