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
import './App.css'
import { MainPage } from './pages/Main'

function ProtectedRoute(props: RouteProps) {
  const location = useLocation()
  const [auth, setAuth] = useState(false)

  return auth ? (
    <Route {...props} />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

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
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/" element={<ProtectedRoute />} /> */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
