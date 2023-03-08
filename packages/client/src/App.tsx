import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Pages from './pages'
import { DrawerBar } from './components/drawerBar'
import { RequaredAuth } from './utils/routing/ProtectedRoute'
import { Routes as Paths } from './utils/routing/routes'
import './App.css'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])

  return (
    <BrowserRouter>
      <div className="App" data-testid="App">
        <DrawerBar>
          <Routes>
            <Route path={Paths.Home} element={<Pages.Home />} />
            <Route path={Paths.Login} element={<Pages.Login />} />
            <Route
              path={Paths.Profile}
              element={
                <RequaredAuth>
                  <Pages.Profile />
                </RequaredAuth>
              }
            />
          </Routes>
        </DrawerBar>
      </div>
    </BrowserRouter>
  )
}

export default App
