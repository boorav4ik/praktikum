import { useState } from 'react'
import TriangleSquare from 'assets/audio/TriangleSquare.mp3'
import { Fab } from './FloatingActionButton'
import MusicNote from '@mui/icons-material/MusicNote'
import MusicOff from '@mui/icons-material/MusicOff'

const Music = new Audio(TriangleSquare)
Music.loop = true

export function AudioPlayer() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    if (toggle) Music.pause()
    else Music.play()
    setToggle(!toggle)
  }

  return (
    <Fab
      title={toggle ? 'Достаточно музычки' : `Музычку погромче`}
      onClick={handleToggle}
      order={1}>
      {toggle ? <MusicOff /> : <MusicNote />}
    </Fab>
  )
}
