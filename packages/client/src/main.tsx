import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from './themes/main'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'

// Временное решение, чтоб useEffect не вызывался 2 раза
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  // </React.StrictMode>
)
