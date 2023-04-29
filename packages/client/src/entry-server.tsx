import { renderToString } from 'react-dom/server'
// import { StaticRouter } from 'react-router-dom/server'
import App from './App'

export function render(path: string) {
  console.log(path);
  
  return renderToString(
    // <StaticRouter location={path}>
      <App />
    // {/* </StaticRouter> */}
  )
}
