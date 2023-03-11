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
import { LeaderboardPage } from './pages/Leaderboard'

import './App.css'
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
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/" element={<ProtectedRoute />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          </Routes>
        </DrawerBar>
      </div>
    </BrowserRouter>
  )
}

export default App
