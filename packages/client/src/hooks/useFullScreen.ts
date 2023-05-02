import { useState, useEffect, useRef, RefObject } from 'react'

interface DocumentWithFullScreen extends Document {
  mozFullScreenElement: Element
  msFullscreenElement: Element
  webkitFullscreenElement: Element
  msExitFullscreen: () => void
  mozCancelFullScreen: () => void
  webkitExitFullscreen: () => void
}

export interface DocumentElementWithFullScreen extends HTMLElement {
  msRequestFullscreen: () => void
  mozRequestFullScreen: () => void
  webkitRequestFullscreen: () => void
}

export function useFullScreen(): [
  RefObject<DocumentElementWithFullScreen>,
  boolean,
  () => void
] {
  const doc = document as DocumentWithFullScreen
  const elementRef = useRef<DocumentElementWithFullScreen>(null)
  const [fullScreen, setFullScreen] = useState<boolean>(
    Boolean(
      doc.fullscreenElement ||
        doc.mozFullScreenElement ||
        doc.webkitFullscreenElement ||
        doc.msFullscreenElement
    )
  )

  const toggleFullScreen = () => {
    const element = elementRef.current

    if (element) {
      if (!fullScreen) {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen()
        }
      } else {
        if (doc.exitFullscreen) {
          doc.exitFullscreen()
        } else if (doc.msExitFullscreen) {
          doc.msExitFullscreen()
        } else if (doc.mozCancelFullScreen) {
          doc.mozCancelFullScreen()
        } else if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen()
        }
      }
    }
  }

  useEffect(() => {
    function onFullscreenChange() {
      setFullScreen(prev => !prev)
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)

    return () =>
      document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  return [elementRef, fullScreen, toggleFullScreen]
}
