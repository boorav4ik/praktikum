import { useCallback, useEffect, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Pages from 'pages'
import * as Layouts from 'layouts'
import { RequiredAuth } from 'hoks/RequiredAuth'
import { Routes as Paths } from 'utils/routes'
import { FullScreen } from 'components/FullScreen'
import './App.css'
import { useSearchParams } from './hooks/useSearchParam'
import { getOuath } from './api/auth'
import { useAuth } from './hooks/useAuth'

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
  const [{ user }, { getUser}] = useAuth()
  const searchParams = useSearchParams();
  const param = searchParams.get('code');
  const getUserInfo = useCallback(() => {
    console.log('1')
    if (param){
      console.log('3')
      getOuath(param, 'http://localhost:3000/')
        .then(() => getUser())
        .catch(e => console.error('token error', e))
    }
  }, [param])

  useEffect(() => {
    getUserInfo()
  }, [param])

  return (
    <FullScreen>
      {/*<BrowserRouter>*/}
        <div className="App" data-testid="App">
          <Routes>
            <Route path={Paths.Index} element={<Layouts.Main />}>
              <Route index element={<Pages.Home />} />
              <Route path={Paths.Login} element={<Pages.Login />} />
              <Route path={Paths.Leaders} element={<Pages.Leader />} />
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
      {/*</BrowserRouter>*/}
    </FullScreen>
  )
}

export default App
