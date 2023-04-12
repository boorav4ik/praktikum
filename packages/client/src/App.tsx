import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}/api`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return (
    <Routes>
      <Route path="/" element={<div>Index</div>} />
      <Route path="/login" element={<div>Login</div>} />
      <Route path="/game" element={<div>Game</div>} />
      <Route path="/forum" element={<div>Forum</div>} />
      <Route path="/profile" element={<div>Profile</div>} />
    </Routes>
  )
}

export default App
