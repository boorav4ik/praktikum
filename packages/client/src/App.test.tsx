import { Provider } from 'react-redux'
import App from './App'
import { render, screen } from '@testing-library/react'
import { createStore } from 'store'
import { BrowserRouter } from 'react-router-dom'
import { UserService } from './api/user'
import { YandexAPIRepository } from './api/auth'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  render(
    <BrowserRouter>
      <Provider store={createStore(  new UserService(new YandexAPIRepository()),)}>
        <App />
      </Provider>
    </BrowserRouter>
  )
  expect(screen.getByTestId('App')).toBeDefined()
})
