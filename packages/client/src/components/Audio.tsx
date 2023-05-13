import { useEffect, useRef, useState } from 'react'
import TriangleSquare from 'assets/audio/TriangleSquare.mp3'
import { Fab } from './FloatingActionButton'
import MusicNote from '@mui/icons-material/MusicNote'
import MusicOff from '@mui/icons-material/MusicOff'

export function AudioPlayer() {
  const [isPaused, setIsPaused] = useState(true)
  const audioRef = useRef<HTMLAudioElement>()

  const handlePlay = () => setIsPaused(state => !state)

  useEffect(() => {
    const music = audioRef.current
    if (!music) return
    if (isPaused) music.pause()
    else music.play()
  }, [isPaused])

  useEffect(() => {
    const audio = new Audio(TriangleSquare)
    audio.loop = true
    audioRef.current = audio
  }, [])

  return (
    <Fab
      title={isPaused ? `Музычку погромче` : 'Достаточно музычки'}
      onClick={handlePlay}
      order={1}>
      {isPaused ? <MusicNote /> : <MusicOff />}
    </Fab>
  )
}
