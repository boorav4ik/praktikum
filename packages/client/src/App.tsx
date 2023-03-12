import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Pages from './pages'
import * as Layouts from './layouts'
import { RequaredAuth } from './hoks/RequaredAuth'
import { Routes as Paths } from './utils/routes'
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
        <Routes>
          <Route path={Paths.Index} element={<Layouts.Main />}>
            <Route index element={<Pages.Home />} />
            <Route path={Paths.Login} element={<Pages.Login />} />
            <Route path={Paths.SignUp} element={<Pages.SignUp />} />
            <Route
              path={Paths.Profile}
              element={
                <RequaredAuth>
                  <Pages.Profile />
                </RequaredAuth>
              }
            />
          </Route>
          <Route path={Paths.NotFounde} element={<Pages.Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
