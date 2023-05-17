import { MouseEventHandler, RefObject, useEffect, useRef } from 'react'
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
import { useAuth } from 'hooks/useAuth'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'

const Screen = styled(Box)(() => ({
  '&::backdrop': {
    background: 'transparent',
  },
}))

export function FullScreen({ children }: { children: JSX.Element }) {
  const fullScreenElement = useRef(
    null
  ) as RefObject<DocumentElementWithFullScreen>
  const [{ user, theme }, { changeThemeOnServer, updateUserTheme }] = useAuth()

  const [fullScreen, toggleFullScreen] = useFullScreen(fullScreenElement)

  const handleFullScreen =
    toggleFullScreen as MouseEventHandler<HTMLButtonElement>

  function handlechangeTheme() {
    const newTheme = theme.theme === 'default' ? 'userTheme' : 'default'
    if (user) {
      changeThemeOnServer({
        id: user.id,
        theme: newTheme,
      })
    }
    updateUserTheme({
      id: user?.id ?? 0,
      theme: newTheme,
    })
  }

  console.log('theme = ', theme)

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
        {theme.theme === 'default' ? (
          <ModeNightIcon
            onClick={handlechangeTheme}
            sx={{
              width: 30,
              height: 30,
              margin: 1,
              cursor: 'pointer',
              color: 'black',
            }}
          />
        ) : (
          <LightModeIcon
            onClick={handlechangeTheme}
            sx={{
              width: 30,
              height: 30,
              margin: 1,
              cursor: 'pointer',
              color: 'black',
            }}
          />
        )}
      </Box>
    </Screen>
  )
}
