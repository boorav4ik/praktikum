import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  RouteProps,
  Navigate,
  useLocation,
} from 'react-router-dom'
import { LoginPage } from './pages/Login'
import { MainPage } from './pages/Main'
import { ProfilePage } from './pages/Profile'
import { ForumPage } from './pages/Forum/Forum'
import './App.css'
import { ThemePage } from './pages/Forum/Themes'
import { ThemeBranchPage } from './pages/Forum/ThemeBranch'
import { DrawerBar } from './components/drawerBar'

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
    // const fetchServerData = async () => {
    //   const url = `http://localhost:${__SERVER_PORT__}`
    //   const response = await fetch(url)
    //   const data = await response.json()
    //   console.log(data)
    // }
    //
    // fetchServerData()
  }, [])

  return (
    <BrowserRouter>
      <div className="App" data-testid="App">
        <DrawerBar>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/" element={<ProtectedRoute />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forum">
              <Route index element={<ForumPage />} />
              <Route path=":theme_name">
                <Route index element={<ThemePage />} />
                <Route path=":theme_branch">
                  <Route index element={<ThemeBranchPage />} />
                </Route>
              </Route>
            </Route>
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </DrawerBar>
      </div>
    </BrowserRouter>
  )
}

export default App
