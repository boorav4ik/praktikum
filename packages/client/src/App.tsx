import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Pages from './pages'
import * as Layouts from './layouts'
import { RequaredAuth } from './hoks/RequaredAuth'
import { Routes as Paths } from './utils/routes'
import './App.css'

// function ProtectedRoute(props: RouteProps) {
//   const location = useLocation()
//   const [auth, setAuth] = useState(false)

//   return auth ? (
//     <Route {...props} />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   )
// }

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
            <Route
              path={Paths.Profile}
              element={
                <RequaredAuth>
                  <Pages.Profile />
                </RequaredAuth>
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
    </BrowserRouter>
  )
}

export default App
