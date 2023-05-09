import { CssBaseline, ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import createEmotionServer from '@emotion/server/create-instance'

import App from './App'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server.js'
import { Provider } from 'react-redux'
import { store } from 'store'
import { theme } from './themes/main'

export function render(path: string) {
  const cache = createCache({ key: 'css' })
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache)

  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={path}>
        <Provider store={store}>
          <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </CacheProvider>
        </Provider>
      </StaticRouter>
    </React.StrictMode>
  )
  const emotionChunks = extractCriticalToChunks(html)
  const css = constructStyleTagsFromChunks(emotionChunks)

  return { html, css }
}
