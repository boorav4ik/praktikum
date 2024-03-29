import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Pages from 'pages'
import * as Layouts from 'layouts'
import { RequiredAuth } from 'hoks/RequiredAuth'
import { Routes as Paths } from 'utils/routes'
import { FullScreen } from 'components/FullScreen'
import './App.css'
import ErrorBoundary from 'components/ErrorBoundary'

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
    <FullScreen>
      <BrowserRouter>
        <ErrorBoundary>
          <div className="App" data-testid="App">
            <Routes>
              <Route path={Paths.Index} element={<Layouts.Main />}>
                <Route index element={<Pages.Home />} />
                <Route path={Paths.Login} element={<Pages.Login />} />
                <Route
                  path={Paths.Leaders}
                  element={
                    <RequiredAuth>
                      <Pages.Leader />
                    </RequiredAuth>
                  }
                />
                <Route path={Paths.SignUp} element={<Pages.SignUp />} />
                <Route
                  path={Paths.Profile}
                  element={
                    <RequiredAuth>
                      <Pages.Profile />
                    </RequiredAuth>
                  }
                />
                <Route path={Paths.Forum}>
                  <Route index element={<Pages.Forum />} />
                  <Route path=":theme_name">
                    <Route index element={<Pages.Theme />} />
                    <Route path=":theme_branch">
                      <Route index element={<Pages.ThemeBranch />} />
                    </Route>
                  </Route>
                </Route>
              </Route>
              <Route path={Paths.NotFounde} element={<Pages.Error />} />
            </Routes>
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </FullScreen>
  )
}

export default App
