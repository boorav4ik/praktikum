import { MouseEventHandler, RefObject, useRef } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import {
  DocumentElementWithFullScreen,
  useFullScreen,
} from 'hooks/useFullScreen'
import { DefaultScreenIcon } from 'layouts/Main/icons/DefaultScreen'
import { FullScreenIcon } from 'layouts/Main/icons/FullScreen'
import { Audio } from './Audio'
import { ThemeButton } from './ThemeButton'

const Screen = styled(Box)(() => ({
  '&::backdrop': {
    background: 'transparent',
  },
}))

export function FullScreen({ children }: { children: JSX.Element }) {
  const fullScreenElement = useRef(
    null
  ) as RefObject<DocumentElementWithFullScreen>

  const [fullScreen, toggleFullScreen] = useFullScreen(fullScreenElement)

  const handleFullScreen =
    toggleFullScreen as MouseEventHandler<HTMLButtonElement>

  return (
    <Screen ref={fullScreenElement} className={'fullscreen'}>
      {children}
      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          bottom: '48px',
          right: '24px',
        }}>
        <Audio />
        <Button
          title={!fullScreen ? 'Полноэкранный режим' : 'Обычный режим'}
          onClick={handleFullScreen}
          sx={{
            padding: '12px',
            maxWidth: '54px',
            minWidth: '54px',
          }}>
          {!fullScreen ? <FullScreenIcon /> : <DefaultScreenIcon />}
        </Button>
        <ThemeButton />
      </Box>
    </Screen>
  )
}
