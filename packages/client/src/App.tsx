import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Pages from './pages'
import * as Layouts from './layouts'
import { RequaredAuth } from './hoks/RequaredAuth'
import { Routes as Paths } from './utils/routes'
import './App.css'
import { ForumPage } from './pages/Forum/Forum'
import { ThemePage } from './pages/Forum/Themes'
import { ThemeBranchPage } from './pages/Forum/ThemeBranch'

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
            <Route path="/forum">
              <Route index element={<ForumPage />} />
              <Route path=":theme_name">
                <Route index element={<ThemePage />} />
                <Route path=":theme_branch">
                  <Route index element={<ThemeBranchPage />} />
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
