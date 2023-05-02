import { useEffect, useMemo, useState } from 'react'
import TriangleSquare from 'assets/audio/TriangleSquare.mp3'
import { Fab } from './FloatingActionButton'
import MusicNote from '@mui/icons-material/MusicNote'
import MusicOff from '@mui/icons-material/MusicOff'

export function AudioPlayer() {
  const [toggle, setToggle] = useState(false)

  const audio = useMemo(() => {
    const audio = new Audio(TriangleSquare)
    audio.loop = true
    return audio
  }, [])

  const handleToggle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    if (toggle) audio.play()
    else audio.pause()
  }, [toggle])

  return (
    <Fab
      title={toggle ? 'Достаточно музычки' : `Музычку погромче`}
      onClick={handleToggle}
      order={1}>
      {toggle ? <MusicOff /> : <MusicNote />}
    </Fab>
  )
}
