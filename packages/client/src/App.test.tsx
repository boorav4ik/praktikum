import { Provider } from 'react-redux'
import App from './App'
import { render, screen } from '@testing-library/react'
import { store } from 'store'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(screen.getByTestId('App')).toBeDefined()
})
