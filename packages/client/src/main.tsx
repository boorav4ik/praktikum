import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from './themes/main'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
function startServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("../sw.js").then(registration => {
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
      }).catch((error: string) => {
        console.error("ServiceWorker registration failed: ", error);
      });
    });
  }
}

startServiceWorker();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
