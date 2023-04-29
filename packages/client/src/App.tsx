// import { useEffect } from 'react'
import './App.css'
import { Button } from './atoms/button'

function App() {
  // useEffect(() => {
  //   const fetchServerData = async () => {
  //     const url = `http://localhost:${__SERVER_PORT__}`
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log(data)
  //   }

  //   fetchServerData()
  // }, [])
  return (
    <div className="App">
      <Button label="click me" onClick={() => console.info('thx')} />
    </div>
  )
}

export default App
