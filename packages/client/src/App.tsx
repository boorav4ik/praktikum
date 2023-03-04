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
import { connect, useDispatch } from 'react-redux'
import { login, logout, AuthState } from './store/reducers/auth'
import { User } from './utils/interfaces/User'
import { AnyAction } from '@reduxjs/toolkit'

// function ProtectedRoute(props: RouteProps) {
//   const location = useLocation()
//   const [auth, setAuth] = useState(false)

//   return auth ? (
//     <Route {...props} />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   )
// }

function App(props: { auth: AuthState; login: AnyAction; logout: AnyAction }) {
  const { login, logout, auth } = props
  console.log(props);
  
  const dispatch = useDispatch()
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
      <button onClick={() => dispatch(login)}>login</button>
      <button onClick={() => dispatch(logout)}>logout</button>
    </BrowserRouter>
  )
}

export default connect(state => state, { login, logout })(App)
