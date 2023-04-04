import { render } from '@testing-library/react'
import { MessageRow } from './index'

describe('MessageRow component', () => {
  const mockMessage = {
    id: 1,
    user: {
      id: 1,
      name: 'John Doe',
    },
    text: 'Hello, world!',
  }

  it('renders the message text', () => {
    const { getByText } = render(<MessageRow message={mockMessage} />)
    const messageText = getByText(mockMessage.text)
    expect(messageText).toBeInTheDocument()
  })

  it('renders the user name', () => {
    const { getByText } = render(<MessageRow message={mockMessage} />)
    const userName = getByText(mockMessage.user.name)
    expect(userName).toBeInTheDocument()
  })

  it('applies the color to Message text', () => {
    const color = 'black'
    const { getByText } = render(
      <MessageRow message={mockMessage} color={color} />
    )
    const paragraph = getByText(mockMessage.text)
    expect(paragraph).toHaveStyle('color: black')
  })
})