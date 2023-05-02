import { useEffect, useMemo, useState } from 'react'
import TriangleSquare from 'assets/audio/TriangleSquare.mp3'
import { Fab } from './FloatingActionButton'
import { MusicNote, MusicOff } from '@mui/icons-material'

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
    <Fab title="Музычку погромче" onClick={handleToggle} order={1}>
      {toggle ? <MusicOff /> : <MusicNote />}
    </Fab>
  )
}
