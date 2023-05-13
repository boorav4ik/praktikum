import type { RootState } from 'store'

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.mp3'

declare global {
  interface Window {
    preloadedState?: RootState
  }
}

export {}
