import App from './App'
import { render } from '@testing-library/react'

// const appContent = 'Вот тут будет жить ваше приложение :)'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  const {container} = render(<App />)
  expect(container.querySelector("App")).toBeDefined()
})
