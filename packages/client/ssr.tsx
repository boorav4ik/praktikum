import React from 'react'
import App from './src/App'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './src/themes/main'

export function render(store: Store, location: string) {
  console.log({ store, location })

  return renderToString(
    <StaticRouter location={location}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </StaticRouter>
  )
}
