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
import './App.css'
import { connect } from 'react-redux'
import { login, logout } from './store/reducers/user'
import { User } from './utils/interfaces/User'

// function ProtectedRoute(props: RouteProps) {
//   const location = useLocation()
//   const [auth, setAuth] = useState(false)

//   return auth ? (
//     <Route {...props} />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   )
// }

function App({
  user,
  login,
  logout,
}: {
  user: User
  login: () => void
  logout: () => void
}) {
  console.log({ user, login, logout })

  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchServerData()
  }, [])

  return (
    <BrowserRouter>
      <div className="App" data-testid="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/" element={<ProtectedRoute />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
    </BrowserRouter>
  )
}

export default connect(({ user }) => user, { login, logout })(App)
