import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App'
import { theme } from './themes/main'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { createStore } from './store'
import { BrowserRouter } from 'react-router-dom'

window.preloadedState = {
  auth: {
    user: null,
    userData: null,
    editStatus: 'info',
    isLoading: false,
  },
}

const preloadedState = window.preloadedState

delete window.preloadedState

function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('../sw.js')
        .then(registration => {
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope
          )
        })
        .catch((error: string) => {
          console.error('ServiceWorker registration failed: ', error)
        })
    })
  }
}

startServiceWorker()

const renderMethod = (element: React.ReactNode) => {
  const root = document.getElementById('root')
  return root && root.innerHTML == ''
    ? hydrateRoot(root, element)
    : createRoot(root as HTMLElement).render(element)
}

renderMethod(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={createStore(preloadedState)}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
