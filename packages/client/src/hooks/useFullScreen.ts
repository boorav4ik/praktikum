import { useState, useEffect, useRef, RefObject } from 'react'

export interface ElementWithFullScreen extends HTMLElement {
  msRequestFullscreen: () => void
  mozRequestFullScreen: () => void
  webkitRequestFullscreen: () => void
}

type UseFullscreenOutput = [
  RefObject<ElementWithFullScreen>,
  boolean,
  () => void
]

export function useFullScreen(): UseFullscreenOutput {
  const documentRef = useRef<Document>()
  const elementRef = useRef<ElementWithFullScreen>(null)

  const [fullScreen, setFullScreen] = useState<boolean>(isFullscreen())

  function isFullscreen() {
    const doc = documentRef.current
    if (!doc) return false

    return Boolean(
      doc.fullscreenElement ||
        doc.mozFullScreenElement ||
        doc.webkitFullscreenElement ||
        doc.msFullscreenElement
    )
  }

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
        const doc = documentRef.current
        if (!doc) return
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
    documentRef.current = document
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange)
    }
  }, [])

  return [elementRef, fullScreen, toggleFullScreen]
}
