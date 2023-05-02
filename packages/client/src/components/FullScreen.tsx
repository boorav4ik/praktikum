import { useRef } from 'react'
import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import {
  DocumentElementWithFullScreen,
  useFullScreen,
} from 'hooks/useFullScreen'
// import { DefaultScreenIcon } from 'layouts/Main/icons/DefaultScreen'
// import { FullScreenIcon } from 'layouts/Main/icons/FullScreen'
import { AudioPlayer } from './Audio'
import { Fab } from './FloatingActionButton'
import { ZoomInMap, ZoomOutMap } from '@mui/icons-material'

const Screen = styled(Box)(() => ({
  '&::backdrop': {
    // background: 'transparent',
    display: "none"
  },
}))

export function FullScreen({ children }: { children: JSX.Element }) {
  // const screenRef = useRef<DocumentElementWithFullScreen>()
  const [screenRef, fullScreen, toggleFullScreen] = useFullScreen()

  return (
    <Screen ref={screenRef}>
      {children} <AudioPlayer />
      <Fab
        title={fullScreen ? 'Обычный режим' : 'Полноэкранный режим'}
        onClick={toggleFullScreen}>
        {fullScreen ? <ZoomInMap /> : <ZoomOutMap />}
      </Fab>
    </Screen>
  )
}
