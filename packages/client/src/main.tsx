import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from './themes/main'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'

console.log(theme);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
